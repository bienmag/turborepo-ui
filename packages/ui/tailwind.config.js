/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        test: "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
      },
      fontFamily: {
        mario: ["SuperMario", "sans-serif"],
      },
      backgroundColor: {
        myellow: "#FCCF00",
        mblue: "#009BD9",
        mred: "#E62310",
        mgreen: "#44AF35",
        myellowhover: "#D7B207",
        mgreenhover: "#288C1A",
        mbluehover: "#126180",
      },
      textColor: {
        myellow: "#FCCF00",
        mblue: "#009BD9",
        mred: "#E62310",
        mgreen: "#44AF35",
      },
      borderColor: {
        myellow: "#FCCF00",
        mblue: "#009BD9",
        mred: "#E62310",
        mgreen: "#44AF35",
      },
    },
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
