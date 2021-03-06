/** 
 * @module run 
 * 
 * Todo: Rewrite this description.
 * 
 * @preferred
 * Contains design patterns for the standard lifecycle of objects (opened, 
 * closed, openable, closable, runnable). Helper classes for lifecycle provisioning.  
 */
export { Parameters } from './Parameters';

export { IParameterized } from './IParameterized';
export { IOpenable } from './IOpenable';
export { IClosable } from './IClosable';
export { ICleanable } from './ICleanable';
export { IExecutable } from './IExecutable';
export { INotifiable } from './INotifiable';

export { Opener } from './Opener';
export { Closer } from './Closer';
export { Cleaner } from './Cleaner';
export { Executor } from './Executor';
export { Notifier } from './Notifier';

export { FixedRateTimer } from './FixedRateTimer';