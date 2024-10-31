'use strict';

exports.config = {
  app_name: ['devops-monitoreo'], 
  //license_key: 'f1f3b9bc5dcfdd80d2ba8b910bb0c92fFFFFNRAL',
  license_key: process.env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: 'info'
  },
  
};
