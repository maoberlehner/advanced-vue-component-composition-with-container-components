module.exports = {
  moduleFileExtensions: [
    `js`,
    `jsx`,
    `json`,
    `vue`,
  ],
  transform: {
    '^.+\\.vue$': `vue-jest`,
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': `jest-transform-stub`,
    '^.+\\.jsx?$': `babel-jest`,
  },
  snapshotSerializers: [
    `jest-serializer-vue`,
  ],
  testURL: `http://localhost/`,
};
