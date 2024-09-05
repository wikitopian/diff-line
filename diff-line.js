export default class DiffLine {
  static getDiff(s1, s2) {
    return { diff: 42 };
  }

  static setDiff(s1, diff) {
    return s1 + "diffed";
  }
}

const getDiff = DiffLine.getDiff;
const setDiff = DiffLine.setDiff;

export { getDiff, setDiff };
