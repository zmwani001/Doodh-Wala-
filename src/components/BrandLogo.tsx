import logoImage from '../../assets/Gemini_Generated_Image_djvuzidjvuzidjvu.png';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo = ({ className = '' }: BrandLogoProps) => (
  <img
    src={logoImage}
    alt="Meadow Milk logo"
    className={`object-cover object-center ${className}`}
  />
);