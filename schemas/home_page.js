export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  // __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "object",
      options: {
        collapsible: true,
        columns: 2,
      },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "body",
          title: "Body",
          type: "string",
        },
        {
          name: "cta",
          title: "Call To Action",
          type: "object",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
