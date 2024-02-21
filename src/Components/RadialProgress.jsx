import React from 'react'

const RadialProgress = ({ radius, percentage }) => {

  const perimeter = 2 * Math.PI * radius;
  const progress = (percentage / 100) * perimeter;

  const color = percentage > 75 ? '#4d7c0f' : percentage > 60 ? '#d97706' : '#dc2626';
  const stroke = radius * 0.25;

  return (
    <div className="flex items-center justify-center w-fit" >
      <svg style={{ width: (radius * 2.5), height: (radius * 2.5) }} className="transform -rotate-90">
        <circle cx={radius * 1.25} cy={radius * 1.25} r={radius} stroke="#ddd3" strokeWidth={stroke} fill="transparent" />
        <circle cx={radius * 1.25} cy={radius * 1.25} r={radius} stroke={color} strokeWidth={stroke} fill="transparent"
          strokeDasharray={perimeter}
          strokeDashoffset={perimeter - progress}
        />
      </svg>
      <span style={{ fontSize: (radius) }} className="absolute">{percentage}</span>
    </div>
  )
}

export default RadialProgress
