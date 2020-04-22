const enhancer = require('./enhancer.js');
// test away!
const {
    succeed,
    fail,
    repair,
    get
  } = enhancer;
  
  const defaultItem = {
    name: 'Default Item',
    enhancement: 5,
    durability: 60
  };
  
  const maxEnhancedItem = {
    name: 'Max Enhanced Item',
    enhancement: 20,
    durability: 95
  };
  
  describe('Enhancers', () => {
    describe('Repair Function', () => {
      it('should return new item with durability of 100', () => {
        expect(repair(defaultItem)).toHaveProperty('durability', 100);
      });
    });
  
    describe('Succesful Enhance Function', () => {
      it('should increase item enhancement by 1', () => {
        let { enhancement } = defaultItem;
        enhancement++;
        expect(succeed(defaultItem))
          .toHaveProperty('enhancement', enhancement);
      });
  
      it('should not increase item enhancement if enhancement 20 or above', () => {
        expect(succeed(maxEnhancedItem)).toHaveProperty('enhancement', 20);
      });
    });
  
    describe('Failed Enhance Function', () => {
      it('should decrease durability by 5', () => {
        let { durability } = defaultItem;
        durability -= 5;
        expect(fail(defaultItem)).toHaveProperty(
          'durability',
          durability
        );
      });
  
      it('should decrease durability by 10', () => {
        let { durability } = maxEnhancedItem;
        durability -= 10;
        expect(fail(maxEnhancedItem)).toHaveProperty(
          'durability',
          durability
        );
      });
  
      it('should decrease enhancement by 1', () => {
        let { enhancement } = maxEnhancedItem;
        enhancement--;
        expect(fail(maxEnhancedItem)).toHaveProperty(
          'enhancement',
          enhancement
        );
      });
  
    });
  
    describe('Get Function', () => {
      const zeroEnhancedItem = { ...defaultItem };
      zeroEnhancedItem.enhancement = 0;
  
      it('should not change name if enhancement is 0', () => {
        expect(get(zeroEnhancedItem))
          .toHaveProperty('name', zeroEnhancedItem.name);
      });
  
      it('should change name for enhanced item', () => {
        const enhancedName = '[+18] Max Enhanced Item';
        expect(get(maxEnhancedItem))
          .toHaveProperty('name', enhancedName);
      });
    });
  });