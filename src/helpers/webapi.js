/*
    get('ID', 'SESSION_ID').of('track').where({
        ID: this.props.ID
    });

    call('createTrack').where({
        SESSION_ID: this.props.SESSION_ID
    }).returning('ID');
*/
const apiPath = window.location.hostname === 'localhost' ?
    window.location.protocol + '//' + window.location.hostname + ':4000/' :
    window.location.protocol + '/some-future-hostname-for-dynamo';
const isArray = value => Object.prototype.toString.apply(value).indexOf('Array') !== -1;
const isString = value => typeof(value) === 'string';
const formatToString = value => `"${value}"`;
const formatToArray = arr => `[${arr.map(value => formatValue(value)).toString()}]`;
const formatValue = value => {
    if (isArray(value)) {
        return formatToArray(value);
    }
    
    if (isString(value)) {
        return formatToString(value);
    }

    return value;
}
const valuesToString = values => values.join(',')
const paramsToString = params => (
    Object.entries(params).map(entry => {
        entry[1] = formatValue(entry[1]);
        return entry.join(':');
    }).join(',')
);

export const get = (...values) => ({
    of: (query) => ({    
        where: (params) => {
            fetch(`${apiPath}graphql?query=query{${query}(${paramsToString(params)}){${valuesToString(values)}}}`)
            .then(res => res.json())
            .catch(err => {
                throw(err)
            });
        }   
    })
});

export const call = (mutation) => ({
    where: (params) => ({
        returning: (...values) => {
            fetch(`${apiPath}graphql?query=mutation{${mutation}(${paramsToString(params)}){${valuesToString(values)}}}`, {
                method: 'POST'
            })
            .then(res => res.json())
            .catch(err => {
                throw(err)
            });
        }
    })
});
