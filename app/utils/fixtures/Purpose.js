import { Factory } from 'rosie';

const Purpose = new Factory()
  .sequence('id', index => `p-${index}`)
  .sequence('name', index => `Purpose-${index}`)
  .attr('parent', 'some-parent');

export default Purpose;
