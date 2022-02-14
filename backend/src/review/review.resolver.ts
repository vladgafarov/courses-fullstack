import {
   Resolver,
   Query,
   Mutation,
   Args,
   ResolveField,
   Parent,
   Context,
   GraphQLExecutionContext,
} from '@nestjs/graphql'
import { ReviewService } from './review.service'
import { Review } from './model/review.model'
import { CreateReviewInput } from './dto/create-review.input'
import { UpdateReviewInput } from './dto/update-review.input'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { CurrentUser } from 'src/common/decorators/current-user.decorator'
import { JwtPayload } from 'src/auth/model/jwt-payload'
import { User } from 'src/user/model/user.model'

@Resolver(Review)
@UseGuards(JwtAuthGuard)
export class ReviewResolver {
   constructor(private readonly reviewService: ReviewService) {}

   @Mutation(() => Review)
   async createReview(
      @Args('data') data: CreateReviewInput,
      @CurrentUser() user: JwtPayload
   ) {
      return this.reviewService.create(data, user)
   }

   @Query(() => [Review], { name: 'reviews' })
   findAll(@CurrentUser() user: JwtPayload) {
      return this.reviewService.findAll(user.id)
   }

   @Query(() => Review, { name: 'review' })
   findOne(@Args('id') id: string) {
      return this.reviewService.findOne(id)
   }

   @Mutation(() => Review)
   updateReview(@Args('data') data: UpdateReviewInput) {
      return this.reviewService.update(data)
   }

   @Mutation(() => Review)
   removeReview(@Args('id') id: string) {
      return this.reviewService.remove(id)
   }

   @ResolveField()
   async user(@Parent() review: Review) {
      return review.user
   }

   @ResolveField()
   async course(@Parent() review: Review) {
      return review.course
   }

   @ResolveField(() => Boolean)
   async currentUser(
      @Parent() review: Review,
      @CurrentUser() user: JwtPayload
   ) {
      return this.reviewService.checkCurrentUser(review.id, user?.id)
   }
}
