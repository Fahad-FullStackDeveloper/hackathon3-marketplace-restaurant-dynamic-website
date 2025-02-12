const foodSchema = {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Food Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Category of the food item (e.g., Burger, Sandwich, Drink, etc.)",
    },  
    {
      name: "price",
      type: "number",
      title: "Current Price",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
    {
      name: "reviews",
      type: "number",
      title: "Reviews",
      description: "Number of reviews for the food item",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      description: "Date and time the food item was created",
    },
    {
      name: "updatedAt",
      type: "datetime",
      title: "Updated At",
      description: "Date and time the food item was last updated",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      description: "Date and time the food item was published",
    },
    {
      name: "deletedAt",
      type: "datetime",
      title: "Deleted At",
      description: "Date and time the food item was deleted",
    },
    {
      name: "restockedAt",
      type: "datetime",
      title: "Restocked At",
      description: "Date and time the food item was restocked",
    },
    {
      name: "restockedBy",
      type: "reference",
      title: "Restocked By",
      to: [{ type: "chef" }],
      description: "Chef who restocked the food item",
    },
    {
      name: "restockedReason",
      type: "string",
      title: "Restocked Reason",
      description: "Reason for restocking the food item",
    },
    {
      name: "restockedQuantity",
      type: "number",
      title: "Restocked Quantity",
      description: "Quantity of food items restocked",
    },
    {
      name: "restockedPrice",
      type: "number",
      title: "Restocked Price",
      description: "Price of food items restocked",
    },
    {
      name: "restockedDate",
      type: "datetime",
      title: "Restocked Date",
      description: "Date when food items were restocked",  
    },
    {
      name: "restockedTime",
      type: "datetime",
      title: "Restocked Time",
      description: "Time when food items were restocked",  
    },
    {
      name: "restockedNote",
      type: "string",
      title: "Restocked Note",
      description: "Note for restocking the food item",
    },
    {
      name: "restockedByChef",
      type: "reference",
      title: "Restocked By Chef",
      to: [{ type: "chef" }],
      description: "Chef who restocked the food item",
    },
    {
      name: "restockedByChefNote",
      type: "string",
      title: "Restocked By Chef Note",
      description: "Note for restocking the food item by the chef",
    },
    {
      name: "restockedByChefDate",
      type: "datetime",
      title: "Restocked By Chef Date",
      description: "Date when the food item was restocked by the chef",
    },
    {
      name: "restockedByChefTime",
      type: "datetime",
      title: "Restocked By Chef Time",
      description: "Time when the food item was restocked by the chef",
    },
    {
      name: "restockedByChefQuantity",
      type: "number",
      title: "Restocked By Chef Quantity",
      description: "Quantity of food items restocked by the chef",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
  options: {
    collapsible: true,
    collapsed: false,
  },
};

export default foodSchema;
