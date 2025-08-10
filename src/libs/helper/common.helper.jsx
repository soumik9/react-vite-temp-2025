import classNames from 'classnames';

export const cn = classNames;

// copy handler
export const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        successNotify('Copied to clipboard');
    }).catch(err => {
        errorNotify('Failed to copy text: ', err);
    });
};

// Format Unix timestamp to DD/MM/YYYY or 29 Nov, 2023 based on type
export const formatUnixToDate = (unixTimestamp) => {
    return moment.unix(unixTimestamp).format('MMM DD, YYYY');
};

// Format status string to capitalize each word
export const formatStatusStr = (str) => {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};