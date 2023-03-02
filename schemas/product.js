import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .max(80)
          .error('A title of between 5 - 80 characters is required'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(15)
          .max(80)
          .error('A description of between 15 - 80 characters is required'),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'youtube',
      type: 'object',
      title: 'YouTube Embed',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube video URL',
        },
      ],
    }),
  ],
})
