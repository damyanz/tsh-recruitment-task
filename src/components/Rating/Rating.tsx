import { ReactComponent as StarBorderIcon } from 'assets/svg/star_border.svg';
import { ReactComponent as StarIcon } from 'assets/svg/star.svg';

import { RatingProps } from './Rating.interface';

function Rating({ name, rate, maxRate = 5 }: RatingProps) {
  return (
    <div className="flex space-x-2">
      {[...Array(maxRate)].map((_, index) =>
        index < rate ? (
          <StarIcon
            aria-label="rate"
            className="w-4 h-4 text-orange-primary"
            key={`rating-filled-${name}-${index}`}
          />
        ) : (
          <StarBorderIcon
            aria-label="missing-rate"
            className="w-4 h-4 text-[#B1B5C9]"
            key={`rating-outlined-${name}-${index}`}
          />
        ),
      )}
    </div>
  );
}

export default Rating;
