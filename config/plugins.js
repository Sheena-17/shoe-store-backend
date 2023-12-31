module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });

  // 4503d446b3db713abfdd76a628b82cf7444aaf4cd8bd39a032d9ee7710659268e99ab489df215c46b93371eb8b8cdf533a0a320b5a9292bc311cde6d66295dfc67760550abaea4e5a68a48581449c239d84b2583490bbfaebf034d4973d675933ad354ff088f565c6c02ad3131ba29f304422ef5f9ff1441a0a54d9886ce18b8