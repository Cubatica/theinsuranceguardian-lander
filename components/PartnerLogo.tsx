'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({ name, logo }: PartnerLogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center min-h-[100px] border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group">
      {!imageError ? (
        <Image
          src={logo}
          alt={`${name} Insurance`}
          width={120}
          height={60}
          className="max-h-[60px] w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-gray-500 text-xs font-medium text-center">
          {name}
        </span>
      )}
    </div>
  );
}

