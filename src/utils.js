const labelWhitelist = ['needs qa', 'qa required'];

exports.isDontMerge = name => labelWhitelist.indexOf(name.toLowerCase()) >= 0;
