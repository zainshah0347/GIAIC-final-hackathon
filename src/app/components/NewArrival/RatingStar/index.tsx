'use client'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface ratingStar{
  stars : number;
}
export default function HalfRating({stars} : ratingStar) {
    return (
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={stars} precision={0.5} style={{fontSize : 20}} />
      </Stack>
    );
  }