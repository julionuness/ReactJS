/** IT'S A "MOCHA" KIND OF UNIT TEST ===>>> BEFORE TRYING TO RUN THIS FILE:
1) THE 1st CODE (LINE 17) REQUIRES "chai" -> INSTALL chai: npm install --save-dev chai (https://github.com/chaijs/chai)
2) ALSO, YOU'LL NEED TO INSTALL "mocha" -> npm install --save-dev mocha (https://mochajs.org/) (ALTERNATIVELY: https://stackoverflow.com/questions/28400459/referenceerror-describe-is-not-defined-nodejs)
3) CREATE A NEW FOLDER "test", PLACE THIS FILE INTO THIS NEW FOLDER AND TYPE JUST "mocha" ON THE CMD/TERMINAL
####################################################################################################
--->>> IN CASE OF ANY PROBLEM, FOLLOW THE STEPS BELOW:
4) WHEN YOU TRY TO RUN THIS TEST BY TYPING "mocha", CMD/TERMINAL SHOWS THE FOLLOWING MESSAGE:
...\mocha.ps1 cannot be loaded because running scripts is disabled on this system.
5) OPEN POWERSHELL AS ADMINISTRATOR AND SET IT ON THE CLIENT PC TO "UNRESTRICTED" BY TYPING: Set-ExecutionPolicy -Scope LocalMachine Unrestricted (https://stackoverflow.com/questions/16460163/ps1-cannot-be-loaded-because-the-execution-of-scripts-is-disabled-on-this-syste)
6) AFTER YOUR TEST, DON'T FORGET TO RESET YOUR PC'S POLICY TO ORIGINAL BY TYPING: Set-ExecutionPolicy Undefined
7) TO SEE YOUR WHOLE LIST, JUST TYPE ON POWERSHELL: Get-ExecutionPolicy -List
####################################################################################################
--->>> TO UNDERSTAND THE FOLLOWING CODE: 
8) DEVELOPMENT EXPLANATION: https://www.youtube.com/watch?v=QsupPG1RGVQ&t=40s
9) WEBSITE OF THE ABOVE VIDEO: https://sparkbox.com/foundry/testing_with_mocha_inside_VSCode_for_a_short_feedback_loop
*/
const chai = require('chai');
const Container = require('../object');

chai.config.truncateThreshold = 0;
const { expect } = chai;

describe('Basic tests JULIO TELLES:', () => {
  let container;

  beforeEach(() => {
    container = new Container();
  });

  /**
   * Add 1, 2, 5, 4 -> [1, 2, 4, 5]
   * Median of [1, 2, 4, 5] is 2
   * Delete 1 -> [2, 4, 5]
   * Median of [2, 4, 5] is 4
   */
  it('Test basic 1', function () {
    this.timeout(100);
    container.add(1);
    container.add(2);
    container.add(4);
    container.add(5);
    expect(container.getMedian()).to.be.equal(2);
    expect(container.delete(1)).to.be.true;
    expect(container.getMedian()).to.be.equal(4);
  });

  /**
   * Add 5, 3, 5 -> [3, 5, 5]
   * Median of [3, 5, 5] is 5
   * Delete 5, 5, 5 -> [3]
   * Median of [3] is 3
   * Delete [2, 3] -> []
   * Median of [] is null
   * Add 1, 1, 2, 2, 2 -> [1, 1, 2, 2, 2]
   * Median of [1, 1, 2, 2, 2] is 2
   * Delete 2 -> [1, 1, 2, 2]
   * Median of [1, 1, 2, 2] is 1
   * Delete 1 -> [1, 2, 2]
   * Median of [1, 2, 2] is 2
   */
  it('Test basic 2', function () {
    this.timeout(100);
    container.add(5);
    container.add(3);
    container.add(5);
    expect(container.getMedian()).to.be.equal(5);
    expect(container.delete(5)).to.be.true;
    expect(container.delete(5)).to.be.true;
    expect(container.delete(5)).to.be.false;
    expect(container.getMedian()).to.be.equal(3);
    expect(container.delete(2)).to.be.false;
    expect(container.delete(3)).to.be.true;
    expect(() => container.getMedian()).to.throw(Error);
    container.add(1);
    container.add(1);
    container.add(2);
    container.add(2);
    container.add(2);
    expect(container.getMedian()).to.be.equal(2);
    expect(container.delete(2)).to.be.true;
    expect(container.getMedian()).to.be.equal(1);
    expect(container.delete(1)).to.be.true;
    expect(container.getMedian()).to.be.equal(2);
  });

  /**
   * Delete 4 -> []
   * Median of [] is null
   * Add 10, 9, 8, ..., 1 -> [1, 2, 3, ..., 10]
   * Median of [1, 2, ..., 10] is 5
   * Delete 4, 5, 6 -> [1, 2, 3, 7, 8, 9, 10]
   * Median of [1, 2, 3, 7, 8, 9, 10] is 7
   */
  it('Test basic 3', function () {
    this.timeout(100);
    expect(container.delete(4)).to.be.false;
    expect(() => container.getMedian()).to.throw(Error);
    for (let i = 10; i >= 1; --i) {
      container.add(i);
    }
    expect(container.getMedian()).to.be.equal(5);
    for (let i = 4; i <= 6; ++i) {
      expect(container.delete(i)).to.be.true;
    }
    expect(container.getMedian()).to.be.equal(7);
  });
});
