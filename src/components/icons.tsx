import type { SVGProps } from 'react';

export const LeafIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.61,4.2C15.7,2.29,13.11,2.06,11.06,3.19C8.4,4.68,6.85,7.5,7.22,10.39C7.5,12.5,8.8,14.33,10.6,15.5C9.28,16.88,8.19,18.44,7.43,20C10.14,19.23,12.3,17.9,14,16.21C15.69,17.89,17.86,19.16,20.57,20C19.81,18.44,18.72,16.88,17.4,15.5C19.2,14.33,20.5,12.5,20.78,10.39C21.15,7.5,19.52,4.68,16.94,3.19C15.96,2.62,14.88,2.73,14,3.5C14.88,2.73,15.96,2.62,16.94,3.19C17.22,3.34,17.46,3.5,17.61,4.2Z" />
  </svg>
);

export const CupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 9a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-4z" />
    <path d="M19 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" />
    <path d="M21 12h-2" />
    <path d="M5 12H3" />
    <path d="M12 19v2" />
    <path d="M9 19v2" />
    <path d="M15 19v2" />
    <path d="M8 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8V3z" />
    <path fill="currentColor" d="M5 12.5C5 9.46 7.46 7 10.5 7h3C16.54 7 19 9.46 19 12.5V13H5v-.5z" />
  </svg>
);

export const SplashIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
    >
        <circle cx="50" cy="50" r="10"/>
        <line x1="50" y1="35" x2="50" y2="20" />
        <line x1="65" y1="50" x2="80" y2="50" />
        <line x1="50" y1="65" x2="50" y2="80" />
        <line x1="35" y1="50" x2="20" y2="50" />
        <line x1="60.6" y1="39.4" x2="71.2" y2="28.8" />
        <line x1="60.6" y1="60.6" x2="71.2" y2="71.2" />
        <line x1="39.4" y1="60.6" x2="28.8" y2="71.2" />
        <line x1="39.4" y1="39.4" x2="28.8" y2="28.8" />
    </svg>
);

export const ThaiPatternIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M50,90C27.9,90,10,72.1,10,50S27.9,10,50,10 s40,17.9,40,40S72.1,90,50,90z"
      fill="currentColor"
    />
    <path
      d="M50,20c-16.5,0-30,13.5-30,30s13.5,30,30,30s30-13.5,30-30S66.5,20,50,20z M50,70c-11,0-20-9-20-20s9-20,20-20 s20,9,20,20S61,70,50,70z"
      fill="currentColor"
    />
    <path
      d="M50,30c-11,0-20,9-20,20s9,20,20,20s20-9,20-20S61,30,50,30z M50,60c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10 S55.5,60,50,60z"
      fill="currentColor"
    />
  </svg>
);
