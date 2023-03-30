// Assigning types for keys on a object

const ExeObject: {
  readonly key1: string;
  key2?: string;
} = {
  key1: 'value1',
};

ExeObject.key2 = 'value2';

//the value will be assigned outside the object

//[key: string]: number; can be added to set the key type and the value type
