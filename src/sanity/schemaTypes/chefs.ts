const chefSchema = {
  name: "chef",
  type: "document",
  title: "Chef",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Chef Name",
    },
    {
      name: "position",
      type: "string",
      title: "Position",
      description: "Role or title of the chef (e.g., Head Chef, Sous Chef)",
    },
    {
      name: "experience",
      type: "number",
      title: "Years of Experience",
      description: "Number of years the chef has worked in the culinary field",
    },
    {
      name: "specialty",
      type: "string",
      title: "Specialty",
      description: "Specialization of the chef (e.g., Italian Cuisine, Pastry)",
    },
    {
      name: "image",
      type: "image",
      title: "Chef Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short bio or introduction about the chef",
    },
    {
      name: "available",
      type: "boolean",
      title: "Currently Active",
      description: "Availability status of the chef",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Unique identifier for the chef",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      description: "Date and time the chef was created",
    },
    {
      name: "updatedAt",
      type: "datetime",
      title: "Updated At",
      description: "Date and time the chef was last updated",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      description: "Date and time the chef was published",
    },
    {
      name: "deletedAt",
      type: "datetime",
      title: "Deleted At",
      description: "Date and time the chef was deleted",
    },
    {
      name: "restockedAt",
      type: "datetime",
      title: "Restocked At",
      description: "Date and time the chef was restocked",
    },
    {
      name: "restockedQuantity",
      type: "number",
      title: "Restocked Quantity",
      description: "Quantity of chefs restocked",
    },
    {
      name: "restockedPrice",
      type: "number",
      title: "Restocked Price",
      description: "Price of chefs restocked",
    },
  ],
};

export default chefSchema;
