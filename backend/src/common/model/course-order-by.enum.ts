import { registerEnumType } from '@nestjs/graphql'

export enum CourseOrderBy {
   rating = 'rating',
   price = 'price',
   createdAt = 'createdAt',
}

registerEnumType(CourseOrderBy, {
   name: 'CourseOrderBy',
   description: 'Order by for courses',
})
