
import React from 'react'

const items = [
  { name: '무딘칼', src: '/무딘칼_일반.png' },
  { name: '루비소드', src: '/루비소드_희귀.png' },
  { name: '파멸의검', src: '/파멸의검_에픽.png' },
  { name: '아스가르드의빛', src: '/아스가르드의빛_전설.png' },
  { name: '녹슨 철 투구', src: '/녹슨 철 투구.png' },
  { name: '용기의 투구', src: '/용기의 투구.png' },
  { name: '검은 달의 투구', src: '/검은 달의 투구.png' },
  { name: '신왕의 면류관', src: '/신왕의 면류관.png' },
  { name: '낡은 철 갑옷', src: '/낡은 철 갑옷.png' },
  { name: '기사단 정예 갑주', src: '/기사단 정예 갑주.png' },
  { name: '피의 결의 갑옷', src: '/피의 결의 갑옷.png' },
  { name: '태양의 심장 갑옷', src: '/태양의 심장 갑옷.png' }
]

const LifeRPG = () => {
  return (
    <div>
      <h1>Life R.P.G 장비 미리보기</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {items.map((item) => (
          <div key={item.name}>
            <img src={item.src} alt={item.name} />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LifeRPG
