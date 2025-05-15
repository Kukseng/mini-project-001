module.exports = {
  theme: {
    extend: {
      animation: {
        title: 'animate 1s ease-in-out 0.3s forwards',
        name: 'animate 1s ease-in-out 0.6s forwards',
        des: 'animate 1s ease-in-out 0.9s forwards',
        btn: 'animate 1s ease-in-out 1.2s forwards',
        runningTime: 'runningTime 7s linear forwards'
      },
      keyframes: {
        animate: {
          '0%': { opacity: '0', transform: 'translateY(100px)', filter: 'blur(33px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' }
        },
        runningTime: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        }
      }
    }
  }
}
