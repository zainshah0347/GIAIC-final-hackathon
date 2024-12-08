'use client'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface ratingStar{
  stars : number;
}
export default function HalfRating({stars} : ratingStar) {
  let star = stars
    return (
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={star} precision={0.5} style={{fontSize : 20}} />
      </Stack>
    );
  }