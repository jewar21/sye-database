module.exports = ({ env }) => ({
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
          uploadStream: {},
          delete: {},
        },
      },
    },
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_WtNEkFrtRGD4uapzvIgDhyrlGrqz/zCbVExYEBR",
        apiToken: "zLG4G23VQ9xvBN9m0a6Rni45",
        appFilter: "sye-database",
        teamFilter: "HWYC7C767q0saOvFPfKjjWFU",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });
