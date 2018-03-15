/**
 * Created by bigWhite on 18/3/15.
 * table 类
 */
class table {
  constructor(name,type) {
    this.name = name;
    this.type = type;
  }
  output() {
    console.log(this);
    return this.name;
  }
}
export default table;
