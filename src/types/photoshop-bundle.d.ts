// source: JavaScript.d.ts

/**
 * The $ object provides a number of debugging facilities and informational methods.
 */
interface $ {
  /**
   * The ExtendScript build information.
   */
  readonly build: string

  /**
   * The ExtendScript build date.
   */
  readonly buildDate: Date

  /**
   * The character used as the decimal point character in formatted numeric output.
   */
  decimalPoint: string

  /**
   * The name of the current ExtendScript engine, if set.
   */
  readonly engineName: string

  /**
   * The most recent run-time error information.
   * Assigning error text to this property generates a run-time error; however, the preferred way to generate a run-time error is to throw an Error object.
   */
  error: Error

  /**
   * The file name of the current script.
   */
  readonly fileName: string

  /**
   * Gets or sets low-level debug output flags.
   * A logical AND of bit flag values:
   * 0x0002 (2): Displays each line with its line number as it is executed.
   * 0x0040 (64): Enables excessive garbage collection. Usually, garbage collection starts when the number of objects has increased by a certain amount since the last garbage collection. This flag causes ExtendScript to garbage collect after almost every statement. This impairs performance severely, but is useful when you suspect that an object gets released too soon.
   * 0x0080 (128): Displays all calls with their arguments and the return value.
   * 0x0100 (256): Enables extended error handling (see strict).
   * 0x0200 (512): Enables the localization feature of the toString method. Equivalent to the localize property.
   */
  flags: number

  /**
   * A reference to the global object, which contains the JavaScript global namespace.
   */
  readonly global: any

  /**
   * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
   * initialized during the application startup sequence. Every read access resets the timer to Zero.
   */
  readonly hiresTimer: number

  /**
   * The path for include files for the current script.
   */
  readonly includePath: string

  /**
   * The current debugging level, which enables or disables the JavaScript debugger.
   * One of 0 (no debugging), 1 (break on runtime errors), or 2 (full debug mode).
   */
  level: number

  /**
   * The current line number of the currently executing script.
   */
  readonly line: number

  /**
   * Gets or sets the current locale.
   * The string contains five characters in the form LL_RR, where LL is an ISO 639 language specifier, and RR is an ISO 3166 region specifier.Initially, this is the value that the application or the platform returns for the current user. You can set it to temporarily change the locale for testing. To return to the application or platform setting, set to undefined, null, or the empty string.
   */
  locale: string

  /**
   * Set to true to enable the extended localization features of the built-in toString() method.
   */
  localize: boolean

  /**
   * The ExtendScript memory cache size, in bytes.
   */
  memCache: number

  /**
   * The current operating system version information.
   */
  readonly os: string

  /**
   * An array of objects containing information about the display screens attached to your computer.
   * Each object has the properties left, top, right, bottom, which contain the four corners of each screen in global coordinates.A property primary is true if that object describes the primary display.
   */
  readonly screens: object[]

  /**
   * The current stack trace.
   */
  readonly stack: string

  /**
   * Sets or clears strict mode for object modification.
   * When true, any attempt to write to a read-only property causes a runtime error. Some objects do not permit the creation of new properties when true.
   */
  strict: any

  /**
   * The version number of the ExtendScript engine.
   * Formatted as a three-part number and description; for example: "3.92.95 (debug)".
   */
  readonly version: string

  /**
   * Shows an About box for the ExtendScript component, and returns the text for the box.
   */
  about(): string

  /**
   * Breaks execution at the current position.
   * @param condition A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
   */
  bp(condition?: any): void

  /**
   * Invokes the platform-specific color selection dialog, and returns the selected color.
   * @param color The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
   */
  colorPicker(color: number): number

  /**
   * Loads and evaluates a file.
   * @param file The file to load.
   * @param timeout An optional timeout in milliseconds.
   */
  evalFile(file: File, timeout?: number): any

  /**
   * Initiates garbage collection in the ExtendScript engine.
   */
  gc(): void

  /**
   * Retrieves the value of an environment variable.
   * @param name The name of the variable.
   */
  getenv(name: string): string

  /**
   * Sets the value of an environment variable.
   * @param name The name of the variable.
   * @param value The value of the variable.
   */
  setenv(name: string, value: string): void

  /**
   * Suspends the calling thread for a number of milliseconds.
   * During a sleep period, checks at 100 millisecond intervals to see whether the sleep should be terminated. This can happen if there is a break request, or if the script timeout has expired.
   * @param msecs Number of milliseconds to sleep.
   */
  sleep(msecs: number): void

  /**
   * Converts this object to a string.
   */
  toString(): string

  /**
   * Prints text to the Console.
   * @param text The text to print. All arguments are concatenated.
   */
  write(text: any): void

  /**
   * Prints text to the Console, and adds a newline character.
   * @param text The text to print. All arguments are concatenated.
   */
  writeln(text: any): void
}
declare const $: $

interface ObjectConstructor {
  readonly prototype: Object

  /**
   * Creates and returns a new object of a given type.
   * @param what The object type.
   */
  new (what: any): Object
  (): any
  (what: any): any

  /**
   * Reports whether an object is still valid.
   * @param what The object to check.
   */
  isValid(what: Object): boolean
}
declare const Object: ObjectConstructor

/**
 * The base class of all JavaScript objects.
 */
interface Object {
  /**
   * Points to the constructor function that created this object.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly constructor: Function

  /**
   * Points to the prototype object for this object.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly prototype: Object

  /**
   * Retrieves and returns the Reflection object associated with this method or a property.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly reflect: Reflection

  /**
   * Reports whether a given property is defined with an instance or within the prototype chain.
   * @param name The name of the property to check.
   */
  hasOwnProperty(name: string): boolean

  /**
   * Checks whether the given object is a prototype of this object.
   * @param what The object to check.
   */
  isPrototypeOf(what: Object): boolean

  /**
   * Reports whether a given property is enumerable.
   * @param name The name of the property to check.
   */
  propertyIsEnumerable(name: string): boolean

  /**
   * Creates and returns a string representing this object, localized for the current locale. See toString().
   */
  toLocaleString(): string

  /**
   * Creates and returns a string representation of this object.
   * This function serializes the object, so that it can, for example, be passed between engines. Pass the returned string back to eval() to recreate the object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Creates and returns a string representing this object.
   * Many objects (such as Date) override this method in favor of their own implementation. If an object has no string value and no user-defined toString() method, the default method returns [object type], where type is the object type or the name of the constructor function that created the object.
   */
  toString(): string

  /**
   * Removes the watch function of a property.
   * @param name The name of the property to unwatch.
   */
  unwatch(name: string): void

  /**
   * Retrieves and returns the primitive value of this object.
   * If the object has no primitive value, returns the object itself.Note that you rarely need to call this method yourself.The JavaScript interpreter automatically invokes it when encountering an object where a primitive value is expected.
   */
  valueOf(): Object

  /**
   * Adds a watch function to a property, which is called when the value changes.
   * This function can accept, modify, or reject a new value that the user, application, or a script has attempted to place in a property.
   * @param name The name of the property to watch.
   * @param func The function to be called when the value of this property changes. This function must three arguments, and return as its result the value to be stored in the property. The arguments are: name: the name of the property that changes. oldValue: The old property value. newValue: The new property value that was specified.
   */
  watch(name: string, func: Function): void
}

interface ArrayConstructor {
  readonly prototype: Array<any>

  /**
   * Creates and returns a new array.
   * Takes any number of parameters, which become the elements of the array, or a single value which becomes the length of an empty array. Note that you cannot create a one-element array, as the single parameter value is interpreted as the length. Returns the new array.
   * @param arrayLength If no other parameters are passed, the initial length of the empty array. Otherwise, the first element.
   * @param values If there is more than one parameter, the array is initialized with the given parameters.
   */
  new (arrayLength?: number): any[]
  new <T>(arrayLength: number): T[]
  new <T>(...values: T[]): T[]
  (arrayLength?: number): any[]
  <T>(arrayLength: number): T[]
  <T>(...values: T[]): T[]
}
declare const Array: ArrayConstructor

/**
 * An array with integer indexing and a length property.
 */
interface Array<T> {
  [n: number]: T

  /**
   * The length of the array
   */
  length: number

  /**
   * Returns a new array created by concatenating the given values to the end of the original array.
   * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
   * @param values Any number of values to be added to the end of the array. Can also be arrays.
   */
  concat(...values: T[][]): T[]

  /**
   * Joins all elements of the array into a string; optionally, each element is separated by delimiter.
   * Returns the string containing the joined elements and delimiters.
   * @param delimiter A string used to separate each element of the array. If omitted, the array elements are separated with a comma.
   */
  join(delimiter?: string): string

  /**
   * Removes the last element from the array, decreases the length by 1, and returns the value of the element.
   * Returns the value of the deleted array element.
   */
  pop(): T | undefined

  /**
   * Places one or more values onto the end of the array and increases length by n.
   * Returns the new length of the array.
   * @param values Any number of values to be pushed onto the end of the array.
   */
  push(...values: T[]): number

  /**
   * Reverses the order of the elements in the array.
   * Returns the reversed array.
   */
  reverse(): T[]

  /**
   * Removes the first element from the array, decreases the length by 1, and returns the value of the element.
   * Returns the value of the deleted array element.
   */
  shift(): T | undefined

  /**
   * Creates a new array, which contains a subset of the original array's elements.
   * The slice begins with the index start, and continues up to, but not including the index, end.If start or end is a negative number, the indexed is resolved counting backwards from the end of the array resulting in the element array[array. length + negativeIndex]. Returns a new array containing elements array[start] through array[end-1].
   */
  slice(start?: number, end?: number): T[]

  /**
   * Sorts the elements of the array in place, using the given function to compare to elements.
   * If no function is provided, the elements are sorted alphabetically.Returns no return value.
   * @param userFunction A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.
   */
  sort(userFunction?: (a: T, b: T) => number): this

  /**
   * Removes num elements from the array beginning with index, start.
   * Optionally insert new elements beginning at index start.To ensure contiguity, elements are moved up to fill in any gaps.Returns a new array containing any elements deleted from the original array.
   * @param start The index of the first element to remove. Negative values are relative to the end of the array.
   * @param deleteCount The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.
   * @param values A list of one or more values to be added to the array starting at index start. Must specify a value for num, to use this argument.
   */
  splice(start: number, deleteCount?: number, ...values: T[]): T[]

  /**
   * Converts an array to a string and returns the string (localized).
   */
  toLocaleString(): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Converts an array to a string and returns the string.
   * Yields the same result as array. join() when called without a parameter.Returns a comma-separated list of all the elements of the array.
   */
  toString(): string

  /**
   * Adds one or more elements to the beginning of the array.
   * Returns the new array length.
   * @param values The values of one or more elements to be added to the beginning of the array.
   */
  unshift(...values: T[]): number
}

/**
 * A global object containing a set of math functions and constants.
 */
interface Math {
  /**
   * Euler's constant and the base of natural logarithms.
   */
  readonly E: number

  /**
   * The natural logarithm of 10.
   */
  readonly LN10: number

  /**
   * The natural logarithm of 2.
   */
  readonly LN2: number

  /**
   * The base 10 logarithm of e.
   */
  readonly LOG10E: number

  /**
   * The base 2 logarithm of e.
   */
  readonly LOG2E: number

  /**
   * The ratio of the circumference of a circle to its diameter.
   */
  readonly PI: number

  /**
   * The reciprocal of the square root of 1/2.
   */
  readonly SQRT1_2: number

  /**
   * The square root of 2.
   */
  readonly SQRT2: number

  /**
   * Returns the absolute value of a number.
   * @param x A number.
   */
  abs(x: number): number

  /**
   * Returns the arc cosine(in radians) of a number.
   * @param x A number.
   */
  acos(x: number): number

  /**
   * Returns the arc sin(in radians) of a number.
   * @param x A number.
   */
  asin(x: number): number

  /**
   * Returns the arc tangent(in radians) of a number.
   * @param x A number.
   */
  atan(x: number): number

  /**
   * Returns the arc tangent of the quotient of its arguments (y/x).
   * @param y A number.
   * @param x A number.
   */
  atan2(y: number, x: number): number

  /**
   * Rounds the number up to the nearest integer.
   * @param x A number.
   */
  ceil(x: number): number

  /**
   * Returns the cosine of an angle provided in radians.
   * @param x An angle, in radians.
   */
  cos(x: number): number

  /**
   * Returns Math.E raised to the power of a number.
   * @param x A number.
   */
  exp(x: number): number

  /**
   * Rounds a number down to the nearest integer.
   * @param x A number.
   */
  floor(x: number): number

  /**
   * Returns the natural logarithm of a number.
   * @param x A number.
   */
  log(x: number): number

  /**
   * Returns the largest of zero or more numbers.
   * @param rest Numbers.
   */
  max(...rest: number[]): number

  /**
   * Returns the smallest of zero or more numbers.
   * @param rest Numbers.
   */
  min(...rest: number[]): number

  /**
   * Returns x raised to the power of y.
   * @param x Numbers.
   * @param y
   */
  pow(x: number, y: number): number

  /**
   * Returns a pseudo-random number from 0.0 up to but not including 1.0.
   */
  random(): number

  /**
   * Rounds a number to the nearest integer.
   * @param x A number.
   */
  round(x: number): number

  /**
   * Returns the sine of an angle provided in radians.
   * @param x An angle, in radians.
   */
  sin(x: number): number

  /**
   * Returns the square root of a number.
   * @param x A number.
   */
  sqrt(x: number): number

  /**
   * Returns the tangent of an angle provided in radians.
   * @param x An angle, in radians.
   */
  tan(x: number): number
}
declare const Math: Math

interface DateConstructor {
  readonly prototype: Date

  /**
   * Returns a new Date object holding the current date and time.
   * If parameters are supplied, returns a new Date object holding the supplied date and time.
   * @param year The year expressed in four digits.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   * @param day An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param min An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param sec An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param ms An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   */
  new (): Date
  new (value: number): Date
  new (value: string): Date
  new (
    year: number,
    month: number,
    day?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number,
  ): Date

  /**
   * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
   * @param text The string to parse.
   */
  parse(text: string): Date

  /**
   * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
   * @param year The year expressed in four digits, for example, 2001. To indicate for a year from 1900 to 1999, you can specify a value from 0 to 99.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   * @param day An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param min An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param sec An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param ms An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   */
  UTC(
    year: number,
    month?: number,
    day?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number,
  ): Date
  /**
   * The now() method returns the number of milliseconds that have passed since midnight January 1, 1970 UTC.
   */
  now(): number
}
declare const Date: DateConstructor

/**
 * A date/time object.
 */
interface Date {
  /**
   * Returns the day of the month of the specified Date object in local time.
   */
  getDate(): number

  /**
   * Returns the day of the week for the specified Date object in local time.
   * This is an integer from 0 (Sunday) to 6 (Saturday).Returns the day of the week for date.
   */
  getDay(): number

  /**
   * Returns the four digit year of the specified Date object in local time.
   */
  getFullYear(): number

  /**
   * Returns the hour of the specified Date object in local time.
   */
  getHours(): number

  /**
   * Returns the milliseconds of the specified Date object in local time.
   */
  getMilliseconds(): number

  /**
   * Returns the minutes of the specified Date object in local time.
   */
  getMinutes(): number

  /**
   * Returns the month of the specified Date object in local time.
   */
  getMonth(): number

  /**
   * Returns the seconds of the specified Date object in local time.
   */
  getSeconds(): number

  /**
   * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
   */
  getTime(): number

  /**
   * Returns the difference in minutes between the computer's local time and UTC.
   */
  getTimezoneOffset(): number

  /**
   * Returns the day of the month of the specified Date object according to UTC.
   */
  getUTCDate(): number

  /**
   * Returns the day of the week for the specified Date object according to UTC.
   */
  getUTCDay(): number

  /**
   * Returns the four digit year of the specified Date object according to UTC.
   */
  getUTCFullYear(): number

  /**
   * Returns the hour of the specified Date object according to UTC.
   */
  getUTCHours(): number

  /**
   * Returns the milliseconds of the specified Date object according to UTC.
   */
  getUTCMilliseconds(): number

  /**
   * Returns the minutes of the specified Date object according to UTC.
   */
  getUTCMinutes(): number

  /**
   * Returns the month of the specified Date object according to UTC.
   */
  getUTCMonth(): number

  /**
   * Returns the seconds of the specified Date object according to UTC.
   */
  getUTCSeconds(): number

  /**
   * Returns the year of the specified Date object, as a difference from 1900, in local time.
   */
  getYear(): number

  /**
   * Sets the day of the month of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param date An integer from 1 to 31 indicating the day of the month.
   */
  setDate(date: number): number

  /**
   * Sets the year of a specified Date object according to local time.
   * This method can also set month and date if those arguments are specified. Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param year A four-digit integer value indicating the year to set.
   */
  setFullYear(year: number): number

  /**
   * Sets the hours of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param hour An integer value from 0 (midnight) to 23 (11 PM).
   */
  setHours(hour: number): number

  /**
   * Sets the milliseconds of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param ms An integer value from 0 to 999.
   */
  setMilliseconds(ms: number): number

  /**
   * Sets the minutes of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param minutes An integer value from 0 to 59.
   */
  setMinutes(minutes: number): number

  /**
   * Sets the month of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   */
  setMonth(month: number): number

  /**
   * Sets the seconds of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param seconds An integer value from 0 to 59.
   */
  setSeconds(seconds: number): number

  /**
   * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
   * Returns the value of ms.
   * @param ms An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
   */
  setTime(ms: number): number

  /**
   * Sets the date of a specified Date object according to universal time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970 in UTC time.
   * @param date An integer from 1 to 31 indicating the day of the month.
   */
  setUTCDate(date: number): number

  /**
   * Sets the year of a specified Date object according to UTC, can also set the month and date.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param year The year expressed in four digits.
   */
  setUTCFullYear(year: number): number

  /**
   * Sets the hours of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
   */
  setUTCHours(hours: number): number

  /**
   * Sets the milliseconds of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param ms An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
   */
  setUTCMilliseconds(ms: number): number

  /**
   * Sets the minutes of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param min An integer value in the range 0 to 59 indicating the number of minutes to be set.
   */
  setUTCMinutes(min: number): number

  /**
   * Sets the month of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param month An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
   */
  setUTCMonth(month: number): number

  /**
   * Sets the seconds of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param sec An integer value in the range 0 to 59 indicating the number of seconds to set.
   */
  setUTCSeconds(sec: number): number

  /**
   * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970.
   * @param year An integer value indicating the year to set. The method interprets a 1- or 2- digit value to mean the 1900s; for example, 13 is interpreted to mean 1913.
   */
  setYear(year: number): number

  /**
   * Returns the date as a string.
   */
  toDateString(): string

  /**
   * Returns the date and time adjusted to GMT (UTC) as a string.
   */
  toGMTString(): string

  /**
   * Returns the date as a localized string.
   */
  toLocaleDateString(): string

  /**
   * Returns a string value representing the date and time stored in the Date object in human readable format (localized).
   */
  toLocaleString(): string

  /**
   * Returns the time as a localized string.
   */
  toLocaleTimeString(): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns a string value representing the date and time stored in the Date object in human readable format.
   * Returns the following string is an example of the format returned by this method: Mon Aug 13, 10:54:21 GMT-0700 2001.
   */
  toString(): string

  /**
   * Returns the time as a string.
   */
  toTimeString(): string

  /**
   * Returns the date and time adjusted to UTC as a string.
   */
  toUTCString(): string

  /**
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   */
  valueOf(): number
}

interface FunctionConstructor {
  readonly prototype: Function

  /**
   * The Function constructor parses the argument list and creates a Function object.
   * @param arguments The list of formal arguments, separated by commas. The formal arguments can also be supplied one by one; in this case, the last argument to the Function constructor is considered to be the function body.
   * @param body The body of the function to create.
   */
  new (arguments: string, body: string): Function
  (arguments: string, body: string): Function
}
declare const Function: FunctionConstructor

/**
 * Wraps a built-in or JavaScript function.
 */
interface Function {
  /**
   * The function arguments, packed into an array.
   * This property is deprecated; use the arguments property within the function body.
   */
  arguments: object

  /**
   * The number of formal arguments.
   * This property is deprecated; use the length property instead.
   */
  readonly arity: number

  /**
   * The number of formal arguments.
   */
  readonly length: number

  /**
   * The function name.
   */
  readonly name: string

  /**
   * Apply a this object and an argument list to a function.
   * This function is different from call(); here, the arguments are suppliedas an Array object.
   * @param thisObj The object to be used as this.
   * @param args An array of arguments.
   */
  apply(thisObj: object, args: any): any

  /**
   * Apply a this object and arguments to a function.
   * This function is different from apply(); here, the arguments are supplied one by one.
   * @param thisObj The object to be used as this.
   * @param arguments The first agument to the function. Add as many as needed.
   */
  call(thisObj: object, ...arguments: any[]): any

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with JavaScript functions.
   */
  toSource(): string

  /**
   * Returns the function definition as a string.
   */
  toString(): string
}

interface StringConstructor {
  readonly prototype: String

  /**
   * Returns a string representation of the value given as an argument.
   * @param value A number, variable, or object to convert to a string.
   */
  new (value?: any): String
  (value: any): string

  /**
   * Returns a string created by concatenation one or more characters specified as ASCII values.
   * @param value1 One or more ASCII values.
   */
  fromCharCode(value1: number): string
}
declare const String: StringConstructor

/**
 * A character string. Each character is adressable by index.
 */
interface String {
  /**
   * The length of the string.
   */
  readonly length: number

  /**
   * Get character at index.
   */
  readonly [index: number]: string

  /**
   * Returns a string consisting of this string enclosed in a <a> tag.
   * @param name The text to be stored in the anchors' name attribute.
   */
  anchor(name: string): string

  /**
   * Returns a string consisting of this string enclosed in a <big> tag.
   */
  big(): string

  /**
   * Returns a string consisting of this string enclosed in a <blink> tag.
   */
  blink(): string

  /**
   * Returns a string consisting of this string enclosed in a <b> tag.
   */
  bold(): string

  /**
   * Returns the character at the specified index.
   * @param index An integer between 0 and string.length -1, specifying the character to return.
   */
  charAt(index: number): string

  /**
   * Returns the Unicode value of the character at the given index.
   * @param index An integer between 0 and string.length -1, specifying the character.
   */
  charCodeAt(index: number): number

  /**
   * If necessary, converts the one or more given values to strings.
   * Those values are concatenated with the original string, the result is returned. The original string is not effected.Returns the concatenated string.
   * @param value The values to be concatenated with the given string.
   */
  concat(...value: any[]): string

  /**
   * Returns a string consisting of this string enclosed in a <tt> tag.
   */
  fixed(): string

  /**
   * Returns a string consisting of this string enclosed in a <font> tag.
   * @param color The value to be stored in the tag's color attribute.
   */
  fontcolor(color: string): string

  /**
   * Returns a string consisting of this string enclosed in a <font> tag.
   * @param size The value to be stored in the tag's size attribute.
   */
  fontsize(size: number): string

  /**
   * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
   * @param searchValue The string for which to search.
   * @param offset The starting offset of the search.
   */
  indexOf(searchValue: string, offset?: number): number

  /**
   * Returns a string consisting of this string enclosed in a <i> tag.
   */
  italics(): string

  /**
   * Returns the index within the string of the last occurrence of the specified value.
   * The string is searched backward, starting at fromIndex.Returns the index within the string where the last occurrence of searchValue was found, or -1 if it was not found.
   * @param searchValue The string for which to search.
   * @param offset The starting offset of the search.
   */
  lastIndexOf(searchValue: string, offset?: number): number

  /**
   * Returns a string consisting of this string enclosed in a <a> tag.
   * @param href The value to be stored in the tag's href attribute.
   */
  link(href: string): string

  /**
   * Performs a localized comparison of two strings.
   * @param what The string to compare with.
   */
  localeCompare(what: string): number

  /**
   * Matches a string against a regular expression.
   * @param regexp The regular expression to use.
   */
  match(regexp: RegExp | string): RegExpMatchArray | null

  /**
   *
   * @param what
   * @param with_
   */
  replace(what: any, with_: string): string

  /**
   *
   * @param search
   */
  search(search: RegExp): number

  /**
   * Extracts a substring of the given string and returns it as a new string.
   * The substring begins at startSlice, and includes all characters up to, but not including the character at the index endSlice. A negative value indexes from the end of the string.For example, a negative value for startSlice is resolved as: string. length + startSlice.The original string is unchanged.Returns a substring of characters from the given string, starting at startSlice and ending with endSlice-1.
   * @param startSlice The index at which to begin extraction.
   * @param endSlice The index at which to end extraction. If omitted, slice extracts to the end of the string.
   */
  slice(startSlice: number, endSlice?: number): string

  /**
   * Returns a string consisting of this string enclosed in a <small> tag.
   */
  small(): string

  /**
   * Splits a string into a group of substrings, places those strings in an array, and returns the array.
   * The substrings are created by breaking the original string at places that match delimiter, the delimiter characters are removed.Returns an array whose elements are the substrings.
   * @param delimiter Specifies the string to use for delimiting. If delimiter is omitted, the array returned contains one element, consisting of the entire string.
   * @param limit
   */
  split(delimiter: string | RegExp, limit?: number): string[]

  /**
   * Returns a string consisting of this string enclosed in a <strike> tag.
   */
  strike(): string

  /**
   * Returns a string consisting of this string enclosed in a <sub> tag.
   */
  sub(): string

  /**
   * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
   * The original string is unchanged.Returns a string containing the extracted characters.
   * @param start Location at which to begin extracting characters.
   * @param length The number of characters to extract.
   */
  substr(start: number, length?: number): string

  /**
   * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
   * The original string is unchanged.Returns a substring of characters from the given string, starting at indexA and ending with indexB-1.
   * @param indexA The index to begin extracting.
   * @param indexB The index at which to end extraction. If omitted, slice extracts to the end of the string.
   */
  substring(indexA: number, indexB?: number): string

  /**
   * Returns a string consisting of this string enclosed in a <sup> tag.
   */
  sup(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
   * The original string is unchanged.
   */
  toLocaleLowerCase(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
   * The original string is unchanged.
   */
  toLocaleUpperCase(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to lowercase.
   * The original string is unchanged.
   */
  toLowerCase(): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns itself.
   */
  toString(): string

  /**
   * Returns a new string which contains all the characters of the original string converted to uppercase.
   * The original string is unchanged.
   */
  toUpperCase(): string

  /**
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   */
  valueOf(): string
}

interface NumberConstructor {
  readonly prototype: Number

  /**
   * Returns a new Number object set to the value of the argument converted to a number.
   * @param value The value of the object being created.
   */
  new (value?: any): Number
  (value: any): number

  /**
   * A constant representing the largest representable number.
   */
  readonly MAX_VALUE: number

  /**
   * A constant representing the smallest representable number.
   */
  readonly MIN_VALUE: number

  /**
   * A constant representing negative infinity.
   */
  readonly NEGATIVE_INFINITY: number

  /**
   * A constant representing the special "Not a Number" value.
   */
  readonly NaN: number

  /**
   * A constant representing positive infinity.
   */
  readonly POSITIVE_INFINITY: number
}
declare const Number: NumberConstructor

/**
 * Wraps a numeric value.
 */
interface Number {
  /**
   * Converts the Number object to a string in scientific notation.
   * @param decimals The number of decimals.
   */
  toExponential(decimals: number): string

  /**
   * Converts the Number object to a string with fixed decimals.
   * @param decimals The number of decimals.
   */
  toFixed(decimals: number): string

  /**
   * Returns the value of a Number object converted to a string, using localized conventions.
   */
  toLocaleString(): string

  /**
   * Converts the Number object to a string in either scientific or fixed notation, epending on its value.
   * @param decimals The number of decimals.
   */
  toPrecision(decimals: number): string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns the value of a Number object converted to a string.
   * @param radix The optional conversion radix.
   */
  toString(radix?: number): string

  /**
   * Returns the value of a Number object as a primitive number.
   */
  valueOf(): number
}

interface BooleanConstructor {
  readonly prototype: Boolean

  /**
   * Creates and returns a new Boolean object set to the value of the argument converted to a boolean.
   * @param value The value to be converted to a Boolean.
   */
  new (value?: any): Boolean
  (value: any): boolean
}
declare const Boolean: BooleanConstructor

/**
 * Wraps a Boolean value.
 */
interface Boolean {
  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Returns the string representation of the value of bool.
   * The method returns the string true if the primitive value of bool is true; otherwise it returns the string false.
   */
  toString(): string

  /**
   * Returns the primitive value of bool.
   * The method returns true if the primitive value of bool is true; otherwise it returns false.
   */
  valueOf(): boolean
}

interface RegExpConstructor {
  readonly prototype: RegExp

  /**
   * Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.
   * @param pattern The pattern to convert.
   * @param flags Flags that control how the conversion is performed. A string containing any combination of the letters i, m, g: "i" -- ignore case in pattern matching "m" -- treat the string as multiple lines "g" -- do global pattern matching
   */
  new (pattern: string | RegExp, flags?: string): RegExp
  (pattern: string | RegExp, flags?: string): RegExp

  /**
   * The matched subexpression #1.
   */
  readonly $1: string

  /**
   * The matched subexpression #2.
   */
  readonly $2: string

  /**
   * The matched subexpression #3.
   */
  readonly $3: string

  /**
   * The matched subexpression #4.
   */
  readonly $4: string

  /**
   * The matched subexpression #5.
   */
  readonly $5: string

  /**
   * The matched subexpression #6.
   */
  readonly $6: string

  /**
   * The matched subexpression #7.
   */
  readonly $7: string

  /**
   * The matched subexpression #8.
   */
  readonly $8: string

  /**
   * The matched subexpression #9.
   */
  readonly $9: string

  /**
   * Indicates whether the match is a global match.
   */
  global: boolean

  /**
   * Indicates whether the match is not case sensitive.
   */
  ignoreCase: boolean

  /**
   * The original input string.
   */
  input: string

  /**
   * The last match.
   */
  readonly lastMatch: string

  /**
   * The value of the last matched subexpression.
   */
  readonly lastParen: string

  /**
   * The string before the match.
   */
  readonly leftContext: string

  /**
   * Indicates whether the match matches multiple lines.
   */
  multiline: boolean

  /**
   * The string after the match.
   */
  readonly rightContext: string
}
declare const RegExp: RegExpConstructor

/**
 * Wraps a regular expression.
 */
interface RegExp {
  /**
   * Compiles a string to a regular expression. Returns true if the compilation was successful.
   * @param pattern The pattern to compile.
   */
  compile(pattern: string): boolean

  /**
   * Execute a regular expression.
   * The return value is an array of matches, with the first element containing the match, and successive elements containing the results of any matching subexpression in their order of appearance. If there is no match, the result is null.
   * @param text The string to match.
   */
  exec(text: string): RegExpExecArray | null

  /**
   * Execute a regular expression, and return true if there is a match.
   * @param text The string to match.
   */
  test(text: string): boolean

  /**
   * Converts this RegExp object to a string.
   */
  toString(): string
}

interface RegExpMatchArray extends Array<string> {
  index?: number
  input?: string
}

interface RegExpExecArray extends Array<string> {
  index: number
  input: string
}

interface ErrorConstructor {
  readonly prototype: Error

  /**
   * Creates a new Error object.
   * @param msg The error message.
   * @param file The name of the file.
   * @param line The line number.
   */
  new (msg: string, file?: string, line?: number): Error
  (msg: string, file?: string, line?: number): Error
}
declare const Error: ErrorConstructor

/**
 * Wraps a runtime error.
 */
interface Error {
  /**
   * The error message.
   */
  description: string

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string

  /**
   * Convert this object to a string.
   */
  toString(): string
}

interface FileConstructor {
  readonly prototype: File

  /**
   * Creates and returns a new File object referring to a given file system location.
   * @param path The full or partial path name of the file,in platform-specific or URI format. The value stored in the object is the absolute path. The file that the path refers to does not need to exist.If the path refers to an existing folder: The File function returns a Folder object instead of a File object. The new operator returns a File object for a nonexisting file with the same name.
   */
  new (path?: string): File
  (path?: string): File

  /**
   * The name of the file system.
   * This is a class property accessed through the File constructor. Valid values are "Windows", "Macintosh", and "Unix".
   */
  readonly fs: string

  /**
   * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
   * See also String.decodeURI().
   * @param uri The UTF-8 encoded string to decode.
   */
  decode(uri: string): string

  /**
   * Encodes a string as required by RFC 2396, and returns the encoded string.
   * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
   * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
   * See also encodeURI().
   * @param name The string to encode.
   */
  encode(name: string): string

  /**
   * Reports whether a given encoding is available.
   * @param name The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.
   */
  isEncodingAvailable(name: string): boolean

  /**
   * Opens a dialog so the user can select one or more files to open.
   * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file or multiple files, and creates new File objects to represent the selected files.
   * If the user clicks OK, returns a File object for the selected file, or an array of objects if multiple files are selected.
   * If the user cancels, returns null.
   * @param prompt The prompt text, displayed if the dialog allows a prompt.
   * @param filter A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
   * @param multiSelect When true, the user can select multiple files and the return value is an array.
   */
  openDialog(prompt?: string, filter?: string | Function, multiSelect?: boolean): File | File[]
  openDialog(prompt: string, filter: string | Function, multiSelect: false): File
  openDialog(prompt: string, filter: string | Function, multiSelect: true): File[]

  /**
   * Opens a dialog so the user can select a file name to save to.
   * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file location to which to save information, and creates a new File object to represent the selected file location.
   * If the user clicks OK, returns a File object for the selected file location.
   * If the user cancels, returns null.
   * @param prompt The prompt text, displayed if the dialog allows a prompt.
   * @param filter In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.
   */
  saveDialog(prompt?: string, filter?: any): File
}
declare const File: FileConstructor

/**
 * Represents a file in the local file system in a platform-independent manner.
 */
interface File {
  /**
   * The full path name for the referenced file in URI notation.
   */
  readonly absoluteURI: string

  /**
   * If true, the object refers to a file system alias or shortcut.
   */
  readonly alias: boolean

  /**
   * The creation date of the referenced file, or null if the object does not refer to a file on disk.
   */
  readonly created: Date

  /**
   * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
   */
  readonly creator: string

  /**
   * The localized name of the referenced file, without the path specification.
   */
  readonly displayName: string

  /**
   * Gets or sets the encoding for subsequent read/write operations.
   * One of the encoding constants listed in the JavaScript Tools Guide. If the value is not recognized, uses the system default encoding.A special encoder, BINARY, is used to read binary files. It stores each byte of the file as one Unicode character regardless of any encoding. When writing, the lower byte of each Unicode character is treated as a single byte to write.
   */
  encoding: string

  /**
   * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
   */
  readonly eof: boolean

  /**
   * A string containing a message describing the most recent file system error.
   * Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.
   */
  error: string

  /**
   * If true, this object refers to a file or file-system alias that actually exists in the file system.
   */
  readonly exists: boolean

  /**
   * The platform-specific full path name for the referenced file.
   */
  readonly fsName: string

  /**
   * The full path name for the referenced file in URI notation.
   */
  readonly fullName: string

  /**
   * When true, the file is not shown in the platform-specific file browser.
   * If the object references a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
   */
  hidden: boolean

  /**
   * The size of the file in bytes.
   * Can be set only for a file that is not open, in which case it truncates or pads the file with 0-bytes to the new length.
   */
  length: number

  /**
   * How line feed characters are written in the file system.
   * One of the values "Windows", "Macintosh", or "Unix".
   */
  lineFeed: string

  /**
   * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
   */
  readonly modified: Date

  /**
   * The file name portion of the absolute URI for the referenced file, without the path specification.
   */
  readonly name: string

  /**
   * The Folder object for the folder that contains this file.
   */
  readonly parent: Folder

  /**
   * The path portion of the absolute URI for the referenced file, without the file name.
   */
  readonly path: string

  /**
   * When true, prevents the file from being altered or deleted.
   * If the referenced file is a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
   */
  readonly: boolean

  /**
   * The path name for the object in URI notation, relative to the current folder.
   */
  readonly relativeURI: string

  /**
   * The file type as a four-character string.
   * In Mac OS, the Mac OS file type.
   * In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for any other file.
   */
  readonly type: string

  /**
   * Changes the path specification of the referenced file.
   * @param path A string containing the new path, absolute or relative to the current folder.
   */
  changePath(path: string): boolean

  /**
   * Closes this open file.
   * Returns true if the file was closed successfully, false if an I/O error occurred.
   */
  close(): boolean

  /**
   * Copies this object’s referenced file to the specified target location.
   * Resolves any aliases to find the source file. If a file exists at the target location, it is overwritten.
   * Returns true if the copy was successful.
   * @param target A string with the URI path to the target location, or a File object that references the target location.
   */
  copy(target: string): boolean

  /**
   * Makes this file a file-system alias or shortcut to the specified file.
   * The referenced file for this object must not yet exist on disk. Returns true if the operation was successful.
   * @param path A string containing the path of the target file.
   */
  createAlias(path: string): void

  /**
   * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
   * You can use this method to run scripts, launch applications, and so on.Returns true immediately if the application launch was successful.
   */
  execute(): boolean

  /**
   * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
   * If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.
   * @param basePath A base path in URI notation.
   */
  getRelativeURI(basePath: string): string

  /**
   * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
   * Returns true if the file was opened successfully.The method attempts to detect the encoding of the open file. It reads a few bytes at the current location and tries to detect the Byte Order Mark character 0xFFFE. If found, the current position is advanced behind the detected character and the encoding property is set to one of the strings UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character is not found, it checks for zero bytes at the current location and makes an assumption about one of the above formats (except UTF-8). If everything fails, the encoding property is set to the system encoding.
   * IMPORTANT: Be careful about opening a file more than once. The operating system usually permits you to do so, but if you start writing to the file using two different File objects, you can destroy your data.
   * @param mode The read-write mode, a single-character string. One of these characters: r (read) Opens for reading. If the file does not exist or cannot be found, the call fails. w (write) Opens a file for writing. If the file exists, its contents are destroyed. If the file does not exist, creates a new, empty file. e (edit) Opens an existing file for reading and writing. a (append) Opens an existing file for reading and writing, and moves the current position to the end of the file.
   * @param type In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
   * @param creator In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
   */
  open(mode: string, type?: string, creator?: string): boolean

  /**
   * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
   * Differs from the class method openDialog() in that it presets the current folder to this File object’s parent folder and the current file to this object’s associated file.
   * If the user clicks OK, returns a File or Folder object for the selected file or folder, or an array of objects.
   * If the user cancels, returns null.
   * @param prompt A string containing the prompt text, if the dialog allows a prompt.
   * @param filter A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
   * @param multiSelect When true, the user can select multiple files and the return value is an array.
   */
  openDlg(prompt?: string, filter?: string | Function, multiSelect?: boolean): File | File[]
  openDlg(prompt: string, filter: string | Function, multiSelect: false): File
  openDlg(prompt: string, filter: string | Function, multiSelect: true): File[]

  /**
   * Reads the contents of the file, starting at the current position.
   * Returns a string that contains up to the specified number of characters. If a number of characters is not supplied, reads from the current position to the end of the file. If the file is encoded, multiple bytes might be read to create single Unicode characters.
   * @param chars An integer specifying the number of characters to read.
   */
  read(chars?: number): string

  /**
   * Reads a single text character from the file at the current position.
   * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.If the file is encoded, multiple bytes might be read to create a single Unicode character. Returns a string that contains the character.
   */
  readch(): string

  /**
   * Reads a single line of text from the file at the current position.
   * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.. If the file is encoded, multiple bytes might be read to create single Unicode characters. Returns a string that contains the text.
   */
  readln(): string

  /**
   * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
   * Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
   * IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
   */
  remove(): boolean

  /**
   * Renames the associated file.
   * Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the file was successfully renamed.
   * @param newName The new file name, with no path information.
   */
  rename(newName: string): boolean

  /**
   * Attempts to resolve the file-system alias or shortcut that this object refers to.
   * If successful, creates and returns a new File object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.
   */
  resolve(): File

  /**
   * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
   * Differs from the class method saveDialog() in that it presets the current folder to this File object’s parent folder and the file to this object’s associated file.
   * If the user clicks OK, returns a File object for the selected file.
   * If the user cancels, returns null.
   * @param prompt A string containing the prompt text, if the dialog allows a prompt.
   * @param filter In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.
   */
  saveDlg(prompt?: string, filter?: any): File

  /**
   * Seeks to a given position in the file.
   * The new position cannot be less than 0 or greater than the current file size. Returns true if the position was changed.
   * @param pos The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.
   * @param mode The seek mode. One of: 0: Seek to absolute position, where pos=0 is the first byte of the file. This is the default. 1: Seek relative to the current position. 2. Seek backward from the end of the file.
   */
  seek(pos: number, mode?: number): boolean

  /**
   * Retrieves the current position as a byte offset from the start of the file.
   * Returns a number, the position index.
   */
  tell(): number

  /**
   * Creates and returns a serialized string representation of this object.
   * Pass the resulting string to eval() to recreate the object.
   */
  toSource(): string

  /**
   * Converts this object to a string.
   */
  toString(): string

  /**
   * Writes the specified text to the file at the current position.
   * You can supply multiple text values; the strings are concatenated to form a single string.For encoded files, writing a single Unicode character may write multiple bytes. Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
   * @param text A text string to be written.
   */
  write(text: string): boolean

  /**
   * Writes a string to the file at the current position and appends a line-feed sequence.
   * You can supply multiple text values. The strings are concatenated into a single string, which is written in the file followed by one line-feed sequence, of the style specified by this object's linefeed property.For encoded files, writing a single Unicode character may write multiple bytes.Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
   * @param text A text string to be written.
   */
  writeln(text: string): boolean
}

interface FolderConstructor {
  readonly prototype: Folder

  /**
   * Creates and returns a new Folder object referring to a given file-system location.
   * If the path name refers to an already existing disk file, a File object is returned instead.Returns the new Folder object.
   * @param path The absolute or relative path to the folder associated with this object, specified in URI format. The value stored in the object is the absolute path.The path need not refer to an existing folder. If the path refers to an existing file, rather than a folder: The Folder() function returns a File object instead of a Folder object. The new operator returns a Folder object for a nonexisting folder with the same name.
   */
  new (path?: string): Folder
  (path?: string): Folder

  /**
   * The folder containing the application data for all users.
   * In Windows, the value of %APPDATA% (by default, C:\\Documents and Settings\\All Users\\Application Data)
   * In Mac OS, /Library/Application Support
   */
  readonly appData: Folder

  /**
   * In Mac OS, a Folder object for the folder containing the bundle of the running application.
   */
  readonly appPackage: Folder

  /**
   * A Folder object for the folder containing common files for all programs installed by the user.
   * In Windows, the value of %CommonProgramFiles% (by default, C:\\Program Files\\Common Files)
   * In Mac OS, /Library/Application Support
   */
  readonly commonFiles: Folder

  /**
   * A Folder object for the current folder.
   * Assign a Folder object or a string containing the new path name to set the current folder. This is a class property accessed through the Folder constructor.
   */
  current: Folder

  /**
   * A Folder object for the folder that contains the user’s desktop.
   * In Windows, C:\\Documents and Settings\\username\\Desktop
   * In Mac OS, ~/Desktop
   */
  readonly desktop: Folder

  /**
   * The name of the current file system.
   * One of "Windows", "Macintosh", or "Unix".
   */
  readonly fs: string

  /**
   * A folder pointing to the user's My Documents folder.
   * In Windows, C:\\Documents and Settings\\username\\My Documents
   * In Mac OS,~/Documents
   */
  readonly myDocuments: Folder

  /**
   * A Folder object for the folder containing the executable image of the running application.
   */
  readonly startup: Folder

  /**
   * A Folder object for the folder containing the operating system files.
   * In Windows, the value of %windir% (by default, C:\\Windows)
   * In Mac OS, /System
   */
  readonly system: Folder

  /**
   * A Folder object for the default folder for temporary files.
   */
  readonly temp: Folder

  /**
   * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
   * folder containing a database; therefore, the property value is null on Windows.
   */
  readonly trash: Folder

  /**
   * A Folder object for the folder containing the user's application data.
   * In Windows, the value of %USERDATA% (by default, C:\\Documents and Settings\\username\\Application Data)
   * In Mac OS,~/Library/Application Support.
   */
  readonly userData: Folder

  /**
   * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
   * See also String.decodeURI().
   * @param uri The UTF-8 string to decode.
   */
  decode(uri: string): string

  /**
   * Encodes a string as required by RFC 2396, and returns the encoded string.
   * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
   * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
   * See also encodeURI().
   * @param name The string to encode.
   */
  encode(name: string): string

  /**
   * Reports whether a given encoding is available.
   * @param name The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.
   */
  isEncodingAvailable(name: string): boolean

  /**
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
   * Differs from the object method selectDlg() in that it does not preselect a folder.
   * If the user clicks OK, returns a File or Folder object for the selected file or folder.
   * If the user cancels, returns null.
   * @param prompt The prompt text, if the dialog allows a prompt.
   */
  selectDialog(prompt?: string): Folder
}
declare const Folder: FolderConstructor

/**
 * Represents a file-system folder or directory in a platform-independent manner.
 */
interface Folder {
  /**
   * The full path name for the referenced folder in URI notation.
   */
  readonly absoluteURI: string

  /**
   * When true, the object refers to a file system alias or shortcut.
   */
  readonly alias: boolean

  /**
   * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
   */
  readonly created: Date

  /**
   * The localized name portion of the absolute URI for the referenced folder, without the path specification.
   */
  readonly displayName: string

  /**
   * A message describing the most recent file system error.
   * Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.
   */
  error: string

  /**
   * When true, this object refers to a folder that currently exists in the file system.
   */
  readonly exists: boolean

  /**
   * The platform-specific name of the referenced folder as a full path name.
   */
  readonly fsName: string

  /**
   * The full path name for the referenced folder in URI notation. .
   */
  readonly fullName: string

  /**
   * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
   */
  readonly modified: Date

  /**
   * The folder name portion of the absolute URI for the referenced file, without the path specification.
   */
  readonly name: string

  /**
   * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
   */
  readonly parent: Folder

  /**
   * The path portion of the object absolute URI for the referenced file, without the folder name.
   */
  readonly path: string

  /**
   * The path name for the referenced folder in URI notation, relative to the current folder.
   */
  readonly relativeURI: string

  /**
   * Changes the path specification of the referenced folder.
   * @param path A string containing the new path, absolute or relative to the current folder.
   */
  changePath(path: string): boolean

  /**
   * Creates a folder at the location given by this object's path property.
   * Returns true if the folder was created.
   */
  create(): boolean

  /**
   * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
   * Returns true immediately if the folder was opened successfully.
   */
  execute(): boolean

  /**
   * Retrieves the contents of this folder, filtered by the supplied mask.
   * Returns an array of File and Folder objects, or null if this object's referenced folder does not exist.
   * @param mask A search mask for file names, specified as a string or a function. A mask string can contain question mark (?) and asterisk (*) wild cards. Default is "*", which matches all file names. Can also be the name of a function that takes a File or Folder object as its argument. It is called for each file or folder found in the search; if it returns true, the object is added to the return array. NOTE: In Windows, all aliases end with the extension .lnk. ExtendScript strips this from the file name when found, in order to preserve compatibility with other operating systems. You can search for all aliases by supplying the search mask "*.lnk", but note that such code is not portable.
   */
  getFiles(mask?: any): Array<File | Folder>

  /**
   * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
   * If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.
   * @param basePath A base path in URI notation.
   */
  getRelativeURI(basePath?: string): string

  /**
   * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
   * Folders must be empty before they can be deleted. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
   * IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
   */
  remove(): boolean

  /**
   * Renames the associated folder.
   * Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the folder was successfully renamed.
   * @param newName The new folder name, with no path information.
   */
  rename(newName: string): boolean

  /**
   * Attempts to resolve the file-system alias or shortcut that this object refers to.
   * If successful, creates and returns a new Folder object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.
   */
  resolve(): Folder

  /**
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
   * Differs from the class method selectDialog() in that it preselects this folder.
   * If the user clicks OK, returns a File or Folder object for the selected file or folder.
   * If the user cancels, returns null.
   * @param prompt The prompt text, if the dialog allows a prompt.
   */
  selectDlg(prompt?: string): Folder

  /**
   * Creates and returns a serialized string representation of this object.
   * Pass the resulting string to eval() to recreate the object.
   */
  toSource(): string

  /**
   * Converts this object to a string.
   */
  toString(): string
}

interface SocketConstructor {
  readonly prototype: Socket

  /**
   * Creates a new Socket object.
   */
  new (): Socket
  (): Socket
}
declare const Socket: SocketConstructor

/**
 * Creates a TCP/IP connection, or establishes a TCP/IP server.
 */
interface Socket {
  /**
   * When true, the connection is active.
   */
  readonly connected: boolean

  /**
   * Sets or retrieves the name of the encoding used to transmit data.
   * Typical values are "ASCII", "BINARY", or "UTF-8".
   */
  encoding: string

  /**
   * When true, the receive buffer is empty.
   */
  readonly eof: boolean

  /**
   * A message describing the most recent error. Setting this value clears any error message.
   */
  error: string

  /**
   * The name of the remote computer when a connection is established.
   * If the connection is shut down or does not exist, the property contains the empty string.
   */
  readonly host: string

  /**
   * The timeout in seconds to be applied to read or write operations.
   */
  timeout: number

  /**
   * Terminates the open connection.
   * Returns true if the connection was closed, false on I/O errors.
   * Deleting the object also closes the connection, but not until JavaScript garbage-collects the object. The connection might stay open longer than you wish if you do not close it explicitly.
   */
  close(): boolean

  /**
   * Instructs the object to start listening for an incoming connection.
   * The call to open() and the call to listen()are mutually exclusive. Call one function or the other, not both.
   * @param port The TCP/IP port number to listen on. Valid port numbers are 1 to 65535. Typical values are 80 for a Web server, 23 for a Telnet server and so on.
   * @param encoding The encoding to be used for the connection Typical values are "ASCII", "BINARY", or "UTF-8".
   */
  listen(port: number, encoding?: string): boolean

  /**
   * Opens the connection for subsequent read/write operations.
   * The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.
   * @param host The server to connect to. This can be a DNS name, an IPv4 address, or an IPv6 address, followed by a colon and a port number.
   * @param encoding The encoding to be used for the connection Typical values are "ASCII", "binary", or "UTF-8".
   */
  open(host: string, encoding?: string): boolean

  /**
   * Checks a listening object for a new incoming connection.
   * If a connection request was detected, the method returns a new Socket object that wraps the new connection. Use this connection object to communicate with the remote computer. After use, close the connection and delete the JavaScript object. If no new connection request was detected, the method returns null.
   */
  poll(): Socket

  /**
   * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
   * Returns a string that contains up to the number of characters that were supposed to be read, or the number of characters read before the connection closed or timed out.
   * @param count The number of characters to read. If not supplied, the connection attempts to read as many characters it can get and returns immediately.
   */
  read(count?: number): string

  /**
   * Reads one line of text up to the next line feed.
   * Line feeds are recognized as LF or CRLF pairs. CR characters are ignored. Returns a string containing the characters.
   */
  readln(): string

  /**
   * Concatenates all arguments into a single string and writes that string to the connection.
   * @param text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
   */
  write(text: string): boolean

  /**
   * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
   * @param text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
   */
  writeln(text: string): boolean
}

/**
 * Provides information about a method, a property or a method parameters.
 */
interface ReflectionInfo {
  /**
   * The description of method or function arguments.
   */
  readonly arguments: ReflectionInfo[]

  /**
   * The data type.
   */
  readonly dataType: string

  /**
   * The default value.
   */
  readonly defaultValue: any

  /**
   * The long description text.
   */
  readonly description: string

  /**
   * The short description text.
   */
  readonly help: string

  /**
   * Contains true if the class describes a collection class.
   */
  readonly isCollection: boolean

  /**
   * The maximum value.
   */
  readonly max: number

  /**
   * The minimum value.
   */
  readonly min: number

  /**
   * The element name.
   */
  readonly name: string

  /**
   * The class object that this element belongs to.
   */
  readonly parent: Reflection

  /**
   * Sample code, if present.
   */
  readonly sampleCode: string

  /**
   * A file containing sample code. May be null.
   */
  readonly sampleFile: File

  /**
   * The element type.
   * One of unknown, readonly, readwrite, createonly, method or parameter.
   */
  readonly type: string
}
declare const ReflectionInfo: ReflectionInfo

/**
 * Provides information about a class.
 */
interface Reflection {
  /**
   * The long description text.
   */
  readonly description: string

  /**
   * The short description text.
   */
  readonly help: string

  /**
   * An array of method descriptions.
   */
  readonly methods: ReflectionInfo[]

  /**
   * The class name.
   */
  readonly name: string

  /**
   * An array of property descriptions.
   */
  readonly properties: ReflectionInfo[]

  /**
   * Sample code, if present.
   */
  readonly sampleCode: string

  /**
   * A file containing sample code. May be null.
   */
  readonly sampleFile: File

  /**
   * An array of class method descriptions.
   */
  readonly staticMethods: ReflectionInfo[]

  /**
   * An array of class property descriptions.
   */
  readonly staticProperties: ReflectionInfo[]

  /**
   * Finds an element description by name.
   * @param name The name of the element to find.
   */
  find(name: string): ReflectionInfo

  /**
   * Returns this class information as XML in OMV format.
   */
  toXML(): XML
}
declare const Reflection: Reflection

interface QNameConstructor {
  readonly prototype: QName

  /**
   * Creates a QName object.
   * @param uri The URI, specified as a Namespace object, an existing QName object, or string. If this is a Namespace object, the URI is set to the namespace URI, and there is no local name. If this is a QName object, the URI and localName is set to those of that object. If this is a string, the URI is set to that string.
   * @param name The local name. Used only if URI is given as a string.
   */
  new (uri: any, name?: string): QName
  (uri: any, name?: string): QName
}
declare const QName: QNameConstructor

/**
 * A qualified XML name, containing the URI and the local name.
 */
interface QName {
  /**
   * The local name part of the qualified name.
   */
  readonly localName: string

  /**
   * The URI part of the qualified name.
   */
  readonly uri: string
}

interface NamespaceConstructor {
  readonly prototype: Namespace

  /**
   * Creates a Namespace object.
   * @param prefix The URIprefix, specified as an existing Namespace object, QName object, or string. If this is a Namespace or a QName object, the URI and prefix are set to that of the object. If this is a string, the prefix is set to that string, and the URI must be specified.
   * @param uri The URI if the prefix is specified as a string.
   */
  new (prefix: any, uri?: string): Namespace
  (prefix: any, uri?: string): Namespace
}
declare const Namespace: NamespaceConstructor

/**
 * A XML namespace object.
 */
interface Namespace {
  /**
   * The named prefix.
   */
  readonly prefix: string

  /**
   * The URI.
   */
  readonly uri: string
}

interface XMLConstructor {
  readonly prototype: XML

  /**
   * Parses an XML string. Throws an error if the XML is incorrect.
   * @param text The text to parse.
   */
  new (text: string): XML
  (text: string): XML

  /**
   * Controls whether XML comments should be parsed (false) or ignored (true).
   */
  ignoreComments: boolean

  /**
   * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
   */
  ignoreProcessingInstructions: boolean

  /**
   * Controls whether whitespace should be parsed (false) or ignored (true).
   */
  ignoreWhitespace: boolean

  /**
   * The number of spaces used to indent pretty-printed XML.
   */
  prettyIndent: number

  /**
   * When true, XML is pretty-printed when converting to a string.
   */
  prettyPrinting: boolean

  /**
   * Returns an object containing the default parsing and print settings for XML.
   */
  defaultSettings(): object

  /**
   * Sets the parsing and print setting for XML using an object returned by the settings() method.
   * @param obj The object containing the settings to set.
   */
  setSettings(obj: object): void

  /**
   * Returns an object containing the current parsing and print settings for XML.
   */
  settings(): object
}
declare const XML: XMLConstructor

/**
 * Wraps XML into an object.
 */
interface XML {
  /**
   * Adds a namespace declaration to the node. Returns the XML object itself.
   * @param namespace The namespace to add.
   */
  addNamespace(namespace: Namespace): XML

  /**
   * Appends the given XML to this XML as a child. Returns the XML object itself.
   * If the argument is not XML, creates a new XML element containing the argument as text. The element name of that new XML is the same as the last element in the original XML.
   * @param child The child XML to add.
   */
  appendChild(child: XML): XML

  /**
   * Returns a list containing all attribute elements matching the given name.
   * @param name The attribute name to look for.
   */
  attribute(name: string): XML

  /**
   * Returns a list containing all attribute elements.
   */
  attributes(): XML

  /**
   * Returns a list containing all children of this XML matching the given element name.
   * If the argument is a number, uses the number as index into the array of children.
   * @param name The name or the index of the child element.
   */
  child(name: string): XML

  /**
   * Returns a number representing the ordinal position of this XML object within the context of its parent.
   */
  childIndex(): number

  /**
   * Returns an XML object containing all the properties of this XML object in order.
   */
  children(): XML

  /**
   * Returns an XML object containing the properties of this XML object that represent XML comments.
   */
  comments(): XML

  /**
   * Checks if this XML object contains the given XML object.
   * @param xml The XML to search for.
   */
  contains(xml: XML): boolean

  /**
   * Creates a copy of this XML object.
   */
  copy(): XML

  /**
   * Returns all the XML-valued descendants of this XML object with the given name.
   * If the name parameter is omitted, returns all descendants of this XML object.
   * @param name The name of the descendant to find.
   */
  descendants(name?: string): XML

  /**
   * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
   * @param name The element name. If not supplied, gets all children that are XML elements.
   */
  elements(name?: string): XML

  /**
   * Reports whether this XML object contains complex content.
   * An XML object is considered to contain complex content if it represents an XML element that has child elements. XML objects representing attributes, comments, processing instructions and text nodes do not have complex content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has complex content.
   */
  hasComplexContent(): boolean

  /**
   * Reports whether this XML object contains simple content.
   * An XML object is considered to contain simple content if it represents a text node, represents an attribute node or if it represents an XML element that has no child elements. XML objects representing comments and processing instructions do not have simple content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has simple content.
   */
  hasSimpleContent(): boolean

  /**
   * Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
   * The last element of thereturned array is the default namespace.
   */
  inScopeNamespaces(): Namespace[]

  /**
   * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
   * If child1 is null, the method inserts child2 before all children of this XML object (that is, after none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.
   * @param child1 The child to insert the other child after. If null, the method inserts child2 before all children of this XML object.
   * @param child2 The XML to insert.
   */
  insertChildAfter(child1: XML, child2: XML): void

  /**
   * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
   * If child1 is null, the method inserts child2 after all children of this XML object (that is, before none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.
   * @param child1 The child to search for. If null, the method inserts child2 after all children of this XML object.
   * @param child2 The XML to insert.
   */
  insertChildBefore(child1: XML, child2: XML): void

  /**
   * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
   */
  length(): number

  /**
   * Returns the local name of this XML object.
   * This value corresponds to the element name unless the name has a namespace prefix. For example, if the element has the name "ns:tag", the return value is "tag".
   */
  localName(): string

  /**
   * Returns a QName object containing the URI and the local name of the element.
   */
  name(): QName

  /**
   * Returns a Namespace object containing the namespace URI of the current element.
   */
  namespace(): Namespace

  /**
   * Returns an array containing all namespace declarations of this XML object.
   */
  namespaceDeclarations(): Namespace[]

  /**
   * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
   */
  nodeKind(): string

  /**
   * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
   */
  normalize(): XML

  /**
   * Returns the parent object of this XML object.
   * The root object, as returned by the XML constructor, does not have a parent and returns null. Note that the E4X standard does not define what happens if this XML object is a list containing elements with multiple parents.
   */
  parent(): XML

  /**
   * Inserts a given child into this object before its existing XML properties, and returns this XML object.
   * @param child The XML to insert.
   */
  prependChild(child: XML): XML

  /**
   * Returns a list of preprocessing instructions.
   * Collects processing-instructions with the given name, if supplied. Otherwise, returns an XML list containing all the children of this XML object that are processing-instructions regardless of their name.
   * @param name The name of the preprocessing instruction to return.
   */
  processingInstructions(name?: string): XML

  /**
   * Removes the given namespace from this XML, and returns this XML.
   * @param namespace The namespace to remove.
   */
  removeNamespace(namespace: Namespace): XML

  /**
   * Replaces the value of specified XML properties of this XML object returns this XML object.
   * This method acts like the assignment operator.
   * @param name The property name. Can be a numeric property name, a name for a set of XML elements, or the properties wildcard “*”. If this XML object contains no properties that match the name, the method returns without modifying this XML object.
   * @param value The XML with which to replace the value of the matching property. Can be an XML object, XML list or any value that can be converted to a String with toString().
   */
  replace(name: string, value: XML): XML

  /**
   * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
   * @param value The new value, which can be a single XML object or an XML list.
   */
  setChildren(value: XML): XML

  /**
   * Replaces the local name of this XML objectwith a string constructed from the given name
   * The local name is any part behind a colon character. If there is no colon, it is the entire name.
   * @param name The name to set.
   */
  setLocalName(name: string): void

  /**
   * Replaces the name of this XML object with the given QName object.
   * @param name The fully qualified name.
   */
  setName(name: QName): void

  /**
   * Sets the namespace for this XML element.
   * If the namespace has not been declared in the tree above this element, adds a namespace declaration.
   * @param namespace The namespace to set.
   */
  setNamespace(namespace: Namespace): void

  /**
   * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
   */
  text(): XML

  /**
   * Returns the string representation of this object.
   * For text and attribute nodes, this is the textual value of the node; for other elements, this is the result of calling the toXMLString() method. If this XML object is a list, concatenates the result of calling toString() on each element.
   */
  toString(): string

  /**
   * Returns an XML-encoded string representation of this XML object.
   * Always includes the start tag, attributes and end tag of the XML object regardless of its content. It is provided for cases when the default XML to string conversion rules are not desired. Interprets the global settings XML.prettyPrint and XML.prettyIndent.
   */
  toXMLString(): string

  /**
   * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
   * @param expr The XPath expression to use.
   */
  xpath(expr: string): XML
}

/**
 * An XML list object.
 * In this implementation, an XMLList object is synonymous to the XML object. The constructor accepts an XML list, but everything else works like theXML object.
 */
interface XMLList {}
declare const XMLList: XMLList
type UnitNameAbbrev =
  | "in"
  | "ft"
  | "yd"
  | "mi"
  | "mm"
  | "cm"
  | "m"
  | "km"
  | "pt"
  | "pc"
  | "tpt"
  | "tpc"
  | "ci"
  | "px"
  | "%"

type UnitName =
  | UnitNameAbbrev
  | "inch"
  | "inches"
  | "foot"
  | "feet"
  | "yard"
  | "yards"
  | "mile"
  | "miles"
  | "millimeter"
  | "millimeters"
  | "centimeter"
  | "centimeters"
  | "meter"
  | "meters"
  | "kilometer"
  | "kilometers"
  | "point"
  | "points"
  | "pica"
  | "picas"
  | "traditional point"
  | "traditional points"
  | "traditional pica"
  | "traditional picas"
  | "cicero"
  | "ciceros"
  | "pixel"
  | "pixels"
  | "percent"
  | "percent"

interface UnitValueConstructor {
  readonly prototype: UnitValue

  /**
   * Creates a new UnitValue object.
   */
  new (value: string | number | UnitValue, unitName?: UnitName): UnitValue
  (value: string | number | UnitValue, unitName?: UnitName): UnitValue

  /**
   * The base unit for all conversions.
   */
  baseUnit: UnitValue
}
declare const UnitValue: UnitValueConstructor

/**
 * Represents a measurement as a combination of values and unit.
 * Note that this object is not available in all applications.
 */
interface UnitValue {
  /**
   * The base unit.
   */
  baseUnit: UnitValue

  /**
   * The unit name.
   */
  readonly type: UnitNameAbbrev | "?"

  /**
   * The numeric value.
   */
  value: number

  /**
   * Returns this instance as a different unit.
   * @param unitName The unit name.
   */
  as(unitName: UnitNameAbbrev): UnitValue

  /**
   * Converts this instance to a different unit.
   * @param unitName The unit name.
   */
  convert(unitName: UnitNameAbbrev): boolean
}

/**
 * Only for TypeScript compatibility
 */
interface CallableFunction extends Function {}

interface NewableFunction extends Function {}

interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}

/**
 * Make all properties in T optional
 */
type Partial<T> = { [P in keyof T]?: T[P] }

/**
 * Make all properties in T readonly
 */
type Readonly<T> = { readonly [P in keyof T]: T[P] }

/**
 * From T pick a set of properties K
 */
type Pick<T, K extends keyof T> = { [P in K]: T[P] }

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends string, T> = { [P in K]: T }

// ________________________________________________________________________________
// ________________________________________________________________________________

// source: ScriptUI.d.ts

declare enum _Alignment {
  TOP = 1,
  BOTTOM = 2,
  LEFT = 3,
  RIGHT = 4,
  FILL = 5,
  CENTER = 6,
}

declare enum _FontStyle {
  REGULAR,
  BOLD,
  ITALIC,
  BOLDITALIC,
}

declare const enum _BrushOrPenType {
  SOLID_COLOR,
  THEME_COLOR,
}

type _Bounds = Bounds
type _Dimension = Dimension

type _Margins = Margins | number

type _AlignmentProperty =
  | "left"
  | "right"
  | "fill"
  | "center"
  | "top"
  | "bottom"
  | "fill"
  | "center"
  | ["left" | "right" | "fill" | "center", "top" | "bottom" | "fill" | "center"]
  | [
      _Alignment.LEFT | _Alignment.RIGHT | _Alignment.FILL | _Alignment.CENTER,
      _Alignment.TOP | _Alignment.BOTTOM | _Alignment.FILL | _Alignment.CENTER,
    ]

type _AlignmentPropertyTitleLayout =
  | ["left" | "right" | "center", "top" | "bottom" | "center"]
  | [
      _Alignment.LEFT | _Alignment.RIGHT | _Alignment.CENTER,
      _Alignment.TOP | _Alignment.BOTTOM | _Alignment.CENTER,
    ]

type _Justify = "left" | "center" | "right"

type _Orientation = "row" | "column" | "stack"

type _Truncate = "middle" | "end" | "none"

/**
 * A global class containing central information about ScriptUI. Not instantiable.
 */
declare class ScriptUI {
  /**
   * Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
   * Predefined alignment values are: TOP, BOTTOM, LEFT, RIGHT, FILL, CENTER
   */
  static readonly Alignment: typeof _Alignment

  /**
   * Collects the enumerated values that can be used as the style argument to the ScriptUI.newFont() method.
   * Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.
   */
  static readonly FontStyle: typeof _FontStyle

  /**
   * The font constants defined by the host application.
   */
  static readonly applicationFonts: object

  /**
   * An object whose properties are the names of compatibility modes supported by the host application.
   * The presence of ScriptUI.compatibility.su1PanelCoordinates means that the application allows backward compatibility with the coordinate system of Panel elements in ScriptUI version 1.
   */
  static readonly compatibility: object

  /**
   * A string containing the internal version number of the ScriptUI module.
   */
  static readonly coreVersion: string

  /**
   * An object whose properties define attributes of the environment in which ScriptUI operates.
   */
  static readonly environment: Environment

  /**
   * An object whose properties and methods provide access to objects used in the ScriptUI event system.
   * It contains one function, createEvent(), which allows you to create event objects in order to simulate user-interaction event
   */
  static readonly events: Events

  /**
   * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
   */
  static readonly frameworkName: string

  /**
   * A string containing the version number of the ScriptUI component framework
   */
  static readonly version: any

  /**
   * Finds and returns the resource for a given text string from the host application's resource data.
   * If no string resource matches the given text, the text itself is returned.
   * @param text The text to match.
   */
  static getResourceText(text: string): string

  /**
   * Creates a new font object for use in text controls and titles.
   * @param name The font name, or the font family name.
   * @param style The font style; can be string, or one of the values of ScriptUI.FontStyle.
   * @param size The font size in points.
   */
  static newFont(name: string, style: string, size: number): ScriptUIFont

  /**
   * Loads a new image from resources or disk files into an image object.
   * Creates a new global image object for use in controls that can display images, loading the associated images from the specified resources or image files.
   * @param normal The resource name or the disk file path to the image used for the normal state.
   * @param disabled The resource name, or the disk file path to the image used for the disabled state.
   * @param pressed The resource name, or the file-system path to the image used for the pressed state.
   * @param rollover The resource name, or the file-system path to the image used for the rollover state.
   */
  static newImage(
    normal: string,
    disabled?: string,
    pressed?: string,
    rollover?: string,
  ): ScriptUIImage
}

/**
 * The instance represents a top-level window or dialog box, which contains user-interface elements.
 * The globally available Window object provides access to predefined and script-defined windows.
 */
declare class Window extends _Control {
  /**
   * Set to true to make this window active.
   * A modal dialog that is visible is by definition the active dialog.
   * An active palette is the front-most window.
   * An active control is the one with focus—that is, the one that accepts keystrokes, or in the case of a Button, be selected when the user typesReturn or Enter.
   */
  active: boolean

  /**
   * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
   * Order of creation determines which children are at the top of a column or the left of a row; the earlier a child is created, the closer it is to the top or left of its column or row. If defined, alignment for a child element overrides the alignChildren setting for the parent container. See alignment property for values.
   */
  alignChildren: _AlignmentProperty

  /**
   * For windows of type dialog, the UI element to notify when the user presses a cancellation key combination.
   * The cancellation key is the Esc key. By default, looks for a button whose name or text is "cancel" (case disregarded).
   */
  cancelElement: object

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the window.
   */
  characters: number

  /**
   * The collection of UI elements that have been added to this container.
   * An array indexed by number or by a string containing an element's name. The length property of this array is the number of child elements for container elements, and is zero for controls.
   */
  readonly children: _Control[]

  /**
   * For windows of type dialog, the UI element to notify when the user presses a Enter key.
   * By default, looks for a button whose name or text is "ok" (case disregarded).
   */
  defaultElement: object

  /**
   * The bounds of the window frame in screen coordinates.
   * The frame consists of the title bar and borders that enclose the content region of a window, depending on the windowing system.
   */
  readonly frameBounds: _Bounds

  /**
   * The top left corner of the window frame in screen coordinates.
   * The same as [frameBounds.x, frameBounds.y]. Set this value to move the window frame to the specified location on the screen. The frameBounds value changes accordingly.
   */
  frameLocation: Point

  /**
   * The size and location of the window's frame in screen coordinates.
   */
  readonly frameSize: _Dimension

  /**
   * Deprecated. Use ScriptUI.frameworkName instead.
   */
  static readonly frameworkName: string

  /**
   * The graphics object that can be used to customize the window’s appearance, in response to the onDraw event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The layout manager for this container.
   * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
   */
  layout: AutoLayoutManager

  /**
   * The number of pixels between the edges of a container and the outermost child elements.
   * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
   */
  margins: _Margins

  /**
   * True if the window is expanded.
   */
  maximized: boolean

  /**
   * True if the window is minimized or iconified.
   */
  minimized: boolean

  /**
   * The opacity of the window, in the range [0..1].
   * A value of 1.0 (the default) makes the window completely opaque, a value of 0 makes it completely transparent. Intermediate values make it partially transparent to any degree.
   */
  opacity: number

  /**
   * The layout orientation of children in a container.
   * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
   */
  orientation: _Orientation

  /**
   * The keypress combination that invokes this element's onShortcutKey() callback.
   */
  shortcutKey: string

  /**
   * The number of pixels separating one child element from its adjacent sibling element.
   * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
   */
  spacing: number

  /**
   * The title, label, or displayed text, a localizable string.
   * Does not apply to containers of type group.
   */
  text: string

  /**
   * Deprecated. Use ScriptUI.version instead.
   */
  static readonly version: any

  /**
   * Creates a new window.
   * @param type The window type. One of: window: Creates a simple window that can be used as a main window for an application. (Not supported by Photoshop CS3.) palette: Creates a modeless dialog, also called a floating palette. (Not supported by Photoshop CS3.) dialog: Creates a modal dialog. This argument can also be a ScriptUI resource specification; in that case, all other arguments are ignored.
   * @param title The window title, a localizable string.
   * @param bounds The window's position and size.
   * @param properties An object containing creation-only properties.
   */
  constructor(
    type: "dialog" | "palette" | "window",
    title?: string,
    bounds?: _Bounds,
    properties?: _AddControlPropertiesWindow,
  )

  /**
   * Creates and returns a new control or container object and adds it to the children of this window.
   * @param type The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.
   * @param bounds A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.
   * @param text The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.
   * @param properties An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.
   */
  add: _AddControl

  /**
   * Displays a platform-standard dialog containing a short message and an OK button.
   * @param message TThe string for the displayed message.
   * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
   * @param errorIcon When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Ignored in Mac OS, which does not support icons for alert dialogs.
   */
  static alert(message: string, title?: string, errorIcon?: boolean): void

  /**
   * Centers this window on screen or with respect to another window.
   * @param window The relative window. If not specified, centers on the screen.
   */
  center(window?: Window): void

  /**
   * Closes this window.
   * . If an onClose() callback is defined for the window, calls that function before closing the window.
   * @param return_ A number to be returned from the show() method that invoked this window as a modal dialog.
   */
  close(return_?: any): void

  /**
   * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
   * Returns true if the user clicked Yes, false if the user clicked No.
   * @param message The string for the displayed message.
   * @param noAsDefault When true, the No button is the default choice, selected when the user types Enter. Default is false, meaning that Yes is the default choice.
   * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
   */
  static confirm(message: string, noAsDefault: boolean, title?: string): boolean

  /**
   * Use this method to find an existing window.
   * This includes windows defined by ScriptUI resource strings, windows already created by a script, and windows created by the application (if the application supports this case). This function is not supported by all applications. Returns a Window object found or generated from the resource, or null if no such window or resource exists.
   * @param type The name of a predefined resource available to JavaScript in the current application; or the window type. If a title is specified, the type is used if more than one window with that title is found. Can be null or the empty string.
   * @param title The window title.
   */
  static find(type: string, title: string): Window

  /**
   * Sends a notification message to all listeners, simulating the specified user interaction event.
   * @param eventName The event name; if omitted, the default event is sent. One of: onClose, onMove, onMoving, onResize, onResizing, onShow
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the window acquires the keyboard focus.
   * Called when the user gives the window the keyboard focus by clicking it or otherwise making it the active window.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the window is about to be closed.
   * Called when a request is made to close the window, either by an explicit call to the close() function or by a user action (clicking the OS-specific close icon in the title bar). The function is called before the window actually closes; it can return false to cancel the close operation.
   */
  onClose(): void | boolean

  /**
   * An event-handler callback function, called when the window loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active window to another window.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window has been moved
   */
  onMove(): void

  /**
   * An event-handler callback function, called when the window is being moved
   * Called while a window in being moved, each time the position changes. A handler can monitor the move operation.
   */
  onMoving(): void

  /**
   * An event-handler callback function, called after the window has been resized
   */
  onResize(): void

  /**
   * An event-handler callback function, called while a window is being resized
   * Called while a window is being resized, each time the height or width changes. A handler can monitor the resize operation.
   */
  onResizing(): void

  /**
   * In Windows only, an event-handler callback function, called a shortcut-key sequence is typed that matches the shortcutKey value for this window.
   */
  onShortcutKey(): void

  /**
   * An event-handler callback function, called just before the window is displayed
   * Called when a request is made to open the window using the show() method, before the window is made visible, but after automatic layout is complete. A handler can modify the results of the automatic layout.
   */
  onShow(): void

  /**
   * Displays a modal dialog that returns the user’s text input.
   * Returns the value of the text edit field if the user clicked OK, null if the user clicked Cancel.
   * @param prompt The string for the displayed message.
   * @param default_ The initial value to be displayed in the text edit field.
   * @param title A string to appear as the title of the dialog. In Windows, this appears in the window’s frame; in Mac OS it appears above the message. The default title string is "Script Prompt".
   */
  static prompt(prompt: string, default_?: string, title?: string): string | null

  /**
   * Removes the specified child control from this window’s children array.
   * No error results if the child does not exist.
   * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
   */
  remove(what: any): void
}

/**
 * Controls the automatic layout behavior for a window or container.
 * The subclass AutoLayoutManager implements the default automatic layout behavior.
 */
declare class AutoLayoutManager {
  /**
   * Invokes the automatic layout behavior for the managed container.
   * Adjusts sizes and positions of the child elements of this window or container according to the placement and alignment property values in the parent and children.
   * Invoked automatically the first time the window is displayed. Thereafter, the script must invoke it explicitly to change the layout in case of changes in the size or position of the parent or children.
   *
   * @param recalculate Optional. When true, forces the layout manager to recalculate the container size for this and any child containers. Default is false.
   */
  layout(recalculate?: boolean): void

  /**
   * Performs a layout after a Window is resized, based on the new size.
   * Resizes the child elements of the managed container with a given alignment type, after the window has been resized by the user.
   */
  resize(): void
}

/**
 * A drawing pen that defines a color and line width used to stroke paths.
 * Create with ScriptUIGraphics.newPen(). Use as a value of  foregroundColor properties, and pass as an argument to drawString() and strokePath() methods.
 */
declare class ScriptUIPen {
  /**
   * The pen color.
   * The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.
   */
  readonly color: number[]

  /**
   * The pixel width of the drawing line.
   */
  lineWidth: number

  /**
   * The theme name.
   * The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.
   */
  readonly theme: string

  /**
   * The pen type, solid or theme.
   * One of these constants: ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR
   */
  readonly type: typeof ScriptUIGraphics.PenType
}

/**
 * A painting brush that encapsulates a color or pattern used to fill paths.
 * Create with ScriptUIGraphics.newBrush(). Use as a value of  backgroundColor properties, and pass as an argument to the fillPath() method.
 */
declare class ScriptUIBrush {
  /**
   * The brush color.
   * The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.
   */
  readonly color: number[]

  /**
   * The theme name.
   * The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.
   */
  readonly theme: string

  /**
   * The brush type, solid or theme.
   * One of these constants: ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR
   */
  readonly type: typeof ScriptUIGraphics.BrushType
}

/**
 * A helper object that encapsulates a drawing path for a figure to be drawn into a window or control.
 * Create with the newPath(), moveto(), lineto(), rectPath(), and ellipsePath() methods.Used as value of currentPath, where it is acted upon by methods such as closePath().Pass as optional argument to fillPath() and strokePath(), which otherwise act upon the current path.
 */
declare class ScriptUIPath {}

/**
 * An object used to draw custom graphics, found in the graphics property of window, container, and control objects.
 * Allows a script to customize aspects of the element’s appearance, such as the color and font. Use an onDraw callback function to set these properties or call the functions.All measurements are in pixels.
 */
declare class ScriptUIGraphics {
  /**
   * Contains the enumerated constants for the type argument of newBrush().
   * Type constants are: SOLID_COLOR, THEME_COLOR.
   */
  static readonly BrushType: typeof _BrushOrPenType

  /**
   * Contains the enumerated constants for the type argument of newPen().
   * Type constants are: SOLID_COLOR, THEME_COLOR.
   */
  static readonly PenType: typeof _BrushOrPenType

  /**
   * The background color for containers; for non-containers, the parent background color.
   * The paint color and style is defined in this brush object.This property is only supported for controls like dropdownlist, edittext, and listbox.
   */
  backgroundColor: ScriptUIBrush

  /**
   * The current drawing path, encapsulated in a path object.
   */
  readonly currentPath: ScriptUIPath

  /**
   * The current position in the current drawing path.
   */
  readonly currentPoint: Point

  /**
   * The background color for containers when disabled or inactive; for non-containers, the parent background color.
   * The paint color and style is defined in this brush object.This property is only supported for controls like dropdownlist, edittext, and listbox.
   */
  disabledBackgroundColor: ScriptUIBrush

  /**
   * The text color when the element is disabled or inactive.
   * The paint color and style is defined in this pen object.
   */
  disabledForegroundColor: ScriptUIPen

  /**
   * The default font to use for displaying text.
   */
  font: ScriptUIFont

  /**
   * The text color.
   * The paint color and style is defined in this pen object.
   */
  foregroundColor: ScriptUIPen

  /**
   * Closes the current path.
   * Defines a line from the current position (currentPoint) to the start point of the current path (the value of currentPath).
   */
  closePath(): void

  /**
   * Draws a focus ring within a region of this element.
   * @param left The left coordinate of the region. Value is relative to the origin of this element.
   * @param top The top coordinate of the region. Value is relative to the origin of this element.
   * @param width The width of the region in pixels.
   * @param height The height of the region in pixels.
   */
  drawFocusRing(left: number, top: number, width: number, height: number): void

  /**
   * Draws an image within a given region of the element.
   * Uses the version of the image that is appropriate to the element's current state.
   * @param image The image to draw. This object contains different versions of an image appropriate to various element states, such as a dimmed version for the disabled state.
   * @param left The left coordinate of the region, relative to the origin of this element.
   * @param top The top coordinate of the region, relative to the origin of this element.
   * @param width The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
   * @param height The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
   */
  drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void

  /**
   * Draw the platform-specific control associated with this element.
   */
  drawOSControl(): void

  /**
   * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
   * @param text The text string.
   * @param pen The drawing pen to use.
   * @param x The left coordinate, relative to the origin of this element.
   * @param y The top coordinate, relative to the origin of this element.
   * @param font The font to use. Default is the  font value in this object.
   */
  drawString(text: string, pen: ScriptUIPen, x: number, y: number, font?: ScriptUIFont): void

  /**
   * Defines an elliptical path within a given rectangular area in the currentPath object, which can be filled using fillPath() or stroked using strokePath().
   * Returns a Point object for the upper left corner of the area, which is the new currentPoint.
   * @param left The left coordinate of the region, relative to the origin of this element.
   * @param top The top coordinate of the region, relative to the origin of this element.
   * @param width The width of the region in pixels.
   * @param height The height of the region in pixels.
   */
  ellipsePath(left: number, top: number, width: number, height: number): Point

  /**
   * Fills a path using a given painting brush.
   * @param brush The brush object that defines the fill color.
   * @param path The path object. Default is the currentPath.
   */
  fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void

  /**
   * Adds a path segment to the currentPath.
   * The line is defined from the currentPoint to the specified destination point. Returns the Point object for the destination point, which becomes the new value of currentPoint.
   * @param x The X coordinate for the destination point, relative to the origin of this element.
   * @param y The Y coordinate for the destination point, relative to the origin of this element.
   */
  lineTo(x: number, y: number): Point

  /**
   * Calculates the size needed to display a string using the given font.
   * Returns a Dimension object that contains the height and width of the string in pixels.
   * @param text The text string to measure.
   * @param font The font to use. Default is the font value in this object.
   * @param boundingWidth The bounding width.
   */
  measureString(text: string, font?: ScriptUIFont, boundingWidth?: number): _Dimension

  /**
   * Adds a given point to the currentPath, and makes it the current drawing position.
   * Returns the Point object which is the new value of currentPoint.
   * @param x The X coordinate for the new point, relative to the origin of this element.
   * @param y The Y coordinate for the new point, relative to the origin of this element.
   */
  moveTo(x: number, y: number): Point

  /**
   * Creates a new painting brush object.
   * @param type The brush type, solid or theme. One of the constants ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR.
   * @param color The brush color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.
   */
  newBrush(type: typeof ScriptUIGraphics.BrushType, color: number[]): ScriptUIBrush

  /**
   * Creates a new, empty path object.
   * Replaces any existing path in currentPath.
   */
  newPath(): ScriptUIPath

  /**
   * Creates a new drawing pen object.
   * @param type The pen type, solid or theme. One of the constants ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR.
   * @param color The pen color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.
   * @param width The width of the pen line in pixels. The line is centered around the current point. For example, if the value is 2, drawing a line from (0, 10) to (5, 10) paints the two rows of pixels directly above and below y-position 10.
   */
  newPen(type: typeof ScriptUIGraphics.PenType, color: number[], width: number): ScriptUIPen

  /**
   * Defines a rectangular path in the currentPath object.
   * The rectangle can be filled using fillPath() or stroked using strokePath().Returns the Point object for the upper left corner of the rectangle, which becomes the new value of currentPoint.
   * @param left The left coordinate relative to the origin of this element.
   * @param top The top coordinate relative to the origin of this element.
   * @param width The width in pixels.
   * @param height The height in pixels.
   */
  rectPath(left: number, top: number, width: number, height: number): Point

  /**
   * Strokes the path segments of a path with a given drawing pen.
   * @param pen The drawing pen that defines the color and line width.
   * @param path The path object. Default is the currentPath.
   */
  strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void
}

/**
 * Describes an input state at the time of the triggering  ScriptUIGraphics.onDraw() event.
 * Contains properties that report whether the current control has the input focus, and the particular mouse button and keypress state. Passed in as argument to ScriptUIGraphics.onDraw().
 */
declare class DrawState {
  /**
   * True if the Alt key is being pressed (in Windows only).
   */
  readonly altKeyPressed: boolean

  /**
   * True if the Caps Lock key is being pressed.
   */
  readonly capsLockKeyPressed: boolean

  /**
   * True if the Command key is being pressed (in Mac OS only).
   */
  readonly cmdKeyPressed: boolean

  /**
   * True if the Ctrl key is being pressed.
   */
  readonly ctrlKeyPressed: boolean

  /**
   * True if the element has the input focus.
   */
  readonly hasFocus: boolean

  /**
   * True if the left mouse button is being pressed.
   */
  readonly leftButtonPressed: boolean

  /**
   * True if the middle mouse button is being pressed.
   */
  readonly middleButtonPressed: boolean

  /**
   * True if the cursor is hovering over this element.
   */
  readonly mouseOver: boolean

  /**
   * True if the Num Lock key is being pressed.
   */
  readonly numLockKeyPressed: boolean

  /**
   * True if the Option key is being pressed (in Mac OS only).
   */
  readonly optKeyPressed: boolean

  /**
   * True if the right mouse button is being pressed.
   */
  readonly rightButtonPressed: boolean

  /**
   * True if the Shift key is being pressed.
   */
  readonly shiftKeyPressed: boolean
}

/**
 * Encapsulates the qualities of a font used to draw text into a control.
 * Create with the newFont() method.Used as a value of font. Passed as an argument to drawString() and measureString().
 */
declare class ScriptUIFont {
  /**
   * The font family name.
   */
  readonly family: string

  /**
   * The complete font name, consisting of the family and style, if specified.
   */
  readonly name: string

  /**
   * The font point size.
   */
  readonly size: number

  /**
   * The font style. One of the constants in ScriptUI.FontStyle.
   */
  readonly style: typeof ScriptUI.FontStyle

  /**
   * The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
   */
  readonly substitute: string
}

/**
 * Encapsulates a set of images that can be drawn into a control.
 * Different images can reflect the current state, such as a dimmed version for a disabled control. Create with the newImage() method. Passed as an argument to drawImage().
 */
declare class ScriptUIImage {
  /**
   * The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh).
   */
  readonly format: string

  /**
   * The image name. Either the file name, or the resource name.
   */
  readonly name: string

  /**
   * The full path to the file that contains the image.
   */
  readonly pathname: string

  /**
   * The image size in pixels.
   */
  readonly size: _Dimension
}

/**
 * A text label that the user cannot change.
 */
declare class StaticText extends _Control {
  /**
   * Always false. This element cannot have input focus.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The text justification style.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The text to display, a localizable string.
   */
  text: string

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * A pushbutton element containing a mouse-sensitive text string.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class Button extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The text justification style.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The text to display, a localizable string.
   */
  text: string

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the element has been clicked
   */
  onClick(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * A mouse-sensitive pushbutton that displays an image instead of text.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class IconButton extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The image object that defines the image to be drawn.
   */
  image: ScriptUIImage

  /**
   * The image object that defines the image to be drawn.
   * Same as IconButton.image.
   */
  icon: ScriptUIImage

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  title: string
  titleLayout: _TitleLayout

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the element has been clicked.
   */
  onClick(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * Displays an icon or image.
 */
declare class Image extends _Control {
  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The image object that defines the image to be drawn.
   */
  image: ScriptUIImage

  /**
   * The image object that defines the image to be drawn.
   * Same as Image.image.
   */
  icon: ScriptUIImage

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  title: string
  titleLayout: _TitleLayout

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * An editable text field that the user can select and change.
 * Calls the onChange() callback if the text is changed and the user types Enter or the control loses focus, or if its notify() method is called. Calls the onChanging() callback when any change is made to the text. The textselection property contains currently selected text.
 */
declare class EditText extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The text justification style.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The current text displayed in the field, a localizable string.
   */
  text: string

  /**
   * The currently selected text, or the empty string if there is no text selected.
   * Setting the value replaces the current text selection and modifies the value of the text property. If there is no current selection, inserts the new value into the text string at the current insertion point. The textselection value is reset to an empty string after it modifies the text value. Note that setting the textselection property before the element’s parent Window exists is an undefined operation.
   */
  textselection: string

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the content of the element has been changed
   * The handler is called only when the change is complete—that is, when focus moves to another control, or the user types Enter. The exact behavior depends on the creation parameter enterKeySignalsOnChange;see the properties property.
   */
  onChange(): void

  /**
   * An event-handler callback function, called when the content of the element is in the process of changing
   * The handler is called for each keypress while this control has the input focus.
   */
  onChanging(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * Displays a list of choices, represented by ListItem objects.
 * When you create the object, you specify whether it allows the user to select only one or multiple items. If a list contains more items than can be displayed in the available area, a scrollbar may appear that allows the user to scroll through all the list items.You can specify the items on creation of the list object, or afterward using the list object’s add() method. You can remove items programmatically with the list object’s remove() and removeAll() methods. You can create a list box with multiple columns; in this case, each row is a selectable choice, and each ListItem represents one row.
 */
declare class ListBox extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * An array of child ListItem elements.
   */
  readonly children: object[]

  /**
   * For a multi-column list box, the column properties.
   * A JavaScript object with two read-only properties whose values are set by the creation parameters:
   * titles: An array of column title strings, whose length matches the number of columns specified at creation.
   * preferredWidths: An array of column widths, whose length matches the number of columns specified at creation.
   * visible: An array of boolean visible attributes, whose length matches the number of columns specified at creation.This property can be used to show/hide a column. Available in ScriptUI Version 6.0 or later provided ScriptUI.frameworkName == 'Flex'.
   */
  readonly columns: object

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The width and height in pixels of each item in the list.
   * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
   */
  itemSize: _Dimension

  /**
   * The array of choice items displayed in the list.
   * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method. Each item has a selected property that is true when it is in the selected state.
   */
  readonly items: ListItem[]

  /**
   * The currently selected item for a single-selection list, or an array of items for current selection in a multi-selection list.
   * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items. You can set the value using the index of an item or an array of indices, rather than object references. If set to an index value that is out of range, the operation is ignored. When set with index values, the property still returns object references.
   * If you set the value to an array for a single-selection list, only the first item in the array is selected.
   * If you set the value to a single item for a multi-selection list, that item is added to the current selection.
   */
  selection: ListItem | number

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * Adds an item to the choices in this list.
   * Returns the item control object. If this is a multi-column list box, each added ListItem represents one selectable row.Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
   * @param type The type of the child element, the string "item".
   * @param text The localizable text label for the item.
   * @param index The index into the current item list after which this item is inserted. If not supplied, or greater than the current list length, the new item is added at the end.
   */
  add(type: "item", text?: string, index?: number): ListItem

  /**
   * Retrieves an item object from the list that has a given text label.
   * @param text The text string to match.
   */
  find(text: string): ListItem

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when an item in the listbox is double-clicked
   * Check the selection property to identify the item that was double-clicked.
   */
  onDoubleClick(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void

  /**
   * Removes a child item from the list.
   * @param what The item or child to remove, specified by 0-based index, text value, or as a ListItem object.
   */
  remove(what: any): void

  /**
   * Removes all child items from the list.
   */
  removeAll(): void
}

/**
 * Displays a single visible item. When you click the control, a list drops down or pops up, and allows you to select one of the other items in the list.
 * Drop-down lists can have nonselectable separator items for visually separating groups of related items, as in a menu. You can specify the items on creation of the list object, or afterward using the list object’s add() method. You can remove items programmatically with the list object’s remove() and removeAll() methods. Calls the onChange() callback if the item selection is changed or if its notify() method is called.
 */
declare class DropDownList extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The width and height in pixels of each item in the list.
   * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
   */
  itemSize: _Dimension

  /**
   * The array of choice items displayed in the drop-down or pop-up list.
   * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method. Items in a drop-down list can be of type separator, in which case they cannot be selected, and are shown as a horizontal line. Each item has a selected property that is true when it is in the selected state.
   */
  readonly items: ListItem[]

  /**
   * The currently selectedlist item.
   * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.
   */
  selection: ListItem | number

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  title: string
  titleLayout: _TitleLayout

  /**
   * Adds an item or separator to the choices in this list.
   * Returns the item control object for type="item", or null for type="separator".
   * @param type The type of the child element. Either item (a basic, selectable item with a text label) or separator
   * @param text The localizable text label for the item.
   * @param index The index into the current item list after which this item is inserted. If not supplied, or greater than the current list length, the new item is added at the end.
   */
  add(type: "item", text?: string, index?: number): ListItem
  add(type: "separator", text?: string, index?: number): null

  /**
   * Retrieves an item object from the list that has a given text label.
   * @param text The text string to match.
   */
  find(text: string): ListItem

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void

  /**
   * Removes a child item from the list.
   * @param what The item or child to remove, specified by 0-based index, text value, or as a ListItem object.
   */
  remove(what: any): void

  /**
   * Removes all child items from the list.
   */
  removeAll(): void
}

/**
 * An item in a list box, drop-down list, or tree view.
 * You can specify initial items in the creation parameters when creating the parent list. Create new items using the add() method (ListBox.add(), DropDownList.add(), TreeView.add()) in the parent list with control type="item", or, for DropDownList controls, type="separator".For a multi-column list box, the object represents one selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
 */
declare class ListItem {
  /**
   * The checked state of an item in a list.
   * When true, the item is marked with the platform-appropriate checkmark. When false, no checkmark is drawn, but space is reserved for it in the left margin, so that the item lines up with other checkable items. When undefined, no space is reserved for a checkmark.
   */
  checked: boolean

  /**
   * The expansion state of an item of type node that is a child of a TreeView list control.
   * When true, the item is in the expanded state and its children are shown, when false, it is collapsed and children are hidden.
   */
  expanded: boolean

  /**
   * An image object for an icon to display in the item.
   * When specified, the image appropriate to the selections state is drawn to the left of the text label. If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
   */
  image: ScriptUIImage

  /**
   * The 0-based index of this item in the items collection of its parent list control.
   */
  readonly index: number

  /**
   * The parent element, a list control.
   */
  readonly parent: _Control

  /**
   * The selection state of this item.
   * When true, the item is part of the selection for its parent list. When false, the item is not selected. Set to true to select this item in a single-selection list, or to add it to the selection array for a multi-selection list.
   */
  selected: boolean

  /**
   * When the parent is a multi-column ListBox, this describes the labels for this selectable row in additional columns.
   * A array of JavaScript objects whose length is one less than the number of columns. The first member describes the label in the second column. Each member object has two properties, of which you can specify one or both:
   * text: A display string for the corresponding label.
   * image: An ScriptUIImage object for the corresponding label.
   */
  readonly subItems: any[]

  /**
   * The label text to display for the item, a localizable string.
   * If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
   */
  text: string

  /**
   * The element type.
   * Normally "item", but an item whose parent is a DropDownList control can have type "separator". A separator item is not mouse-sensitive and is drawn as a horizontal line across the drop-down or pop-up menu.
   */
  readonly type: string

  /**
   * Adds an item to the choices in this list.
   * Returns the item control object.
   * @param type The type of the child element, the string "item" or "node".
   * @param text The localizable text label for the item.
   * @param index The index into the current item list after which this item is inserted. If not supplied, or greater than the current list length, the new item is added at the end.
   */
  add(type: "item" | "node", text?: string, index?: number): ListItem
}

/**
 * A dual-state control showing a box that has a checkmark when the value is true, and is empty when the value is false.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class Checkbox extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The text to display, a localizable string.
   */
  text: string

  /**
   * The selection state of the control.
   * When true, the control is in the selected or set state and displays the check mark. When false, shows an empty box.
   */
  value: boolean

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the element has been clicked.
   */
  onClick(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * A scrollbar with a draggable scroll indicator and stepper buttons to move the indicator.
 * The scrollbar control has a horizontal orientation if the width is greater than the height at creation time, or vertical if its height is greater than its width.
 * Calls the onChange() callback after the position of the indicator is changed or if its notify() method is called. Calls the onChanging() callback repeatedly while the user is moving the indicator. Scrollbars are often created with an associated EditText field to display the current value of the scrollbar, and to allow setting the scrollbar's position to a specific value.
 */
declare class Scrollbar extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The amount to increment or decrement a scrollbar indicator's position when the user clicks ahead or behind the moveable element.
   * Default is 20% of the range between the maxvalue and minvalue property values.
   */
  jumpdelta: number

  /**
   * The maximum value allowed in the value property.
   * Together with minvalue, sets the scrolling range. Default is 100.
   */
  maxvalue: number

  /**
   * The minimum value allowed in the value property.
   * Together with  maxvalue, sets the scrolling range.Default is 0.
   */
  minvalue: number

  /**
   * The key sequence that invokes the  onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The amount by which to increment or decrement a scrollbar element's position when the user clicks a stepper button.
   */
  stepdelta: number

  /**
   * The current position of the indicator.
   * If set to a value outside the range specified by minvalue and maxvalue, it is automatically reset to the closest boundary.
   */
  value: number

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
   */
  onChange(): void

  /**
   * An event-handler callback function, called when the content of the element is in the process of changing
   * The handler is called for any motion of the position indicator while this control has the input focus.
   */
  onChanging(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * A dual-state control, grouped with other radiobuttons, of which only one can be in the selected state.
 * Shows the selected state when value=true, empty when value=false. Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class RadioButton extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The label text for this button, a localizable string.
   */
  text: string

  /**
   * The selection state of this button, selected when true.
   */
  value: boolean

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the element has been clicked.
   */
  onClick(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * A slider bar that indicates a numeric value with a moveable position indicator.
 * All slider controls have a horizontal orientation. Calls the onChange() callback after the position of the indicator is changed or if its notify() method is called. Calls the onChanging() callback repeatedly while the user is moving the indicator. The value property contains the current position of the indicator within the range of minvalue to maxvalue.
 */
declare class Slider extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The maximum value allowed in the value property.
   * Together with minvalue, sets therange.Default is 100.
   */
  maxvalue: number

  /**
   * The minimum value allowed in the value property.
   * Together with maxvalue, sets the range.Default is 0.
   */
  minvalue: number

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * The current position of the indicator.
   * If set to a value outside the range specified by minvalue and maxvalue, it is automatically reset to the closest boundary.
   */
  value: number

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
   */
  onChange(): void

  /**
   * An event-handler callback function, called when the content of the element is in the process of changing
   * The handler is called for any motion of the position indicator while this control has the input focus.
   */
  onChanging(): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void
}

/**
 * A horizontal bar with an indicator that shows the progress of an operation.
 * All progressbar controls have a horizontal orientation. The value property contains the current position of the progress indicator; the default is 0. There is a minvalue property, but it is always 0; attempts to set it to a different value are silently ignored.
 */
declare class Progressbar extends _Control {
  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The maximum value in the range. Default is 100.
   */
  maxvalue: number

  /**
   * The minimum value in the range; always 0. If set to a different value, it is ignored.
   */
  minvalue: number

  /**
   * The current position of the indicator.
   * If set to a value outside the range specified by 0 to maxvalue, it is automatically reset to the closest boundary.
   */
  value: number

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void
}

/**
 * A hierarchical list whose items can contain child items.
 * The ListItem children of this control (in the items array) can be of type node, which means that they can contain child items. An item with child items can expanded, so that the child items are displayed, or collapsed, so that the child items are hidden Individual items can be selected at any level of the tree.
 */
declare class TreeView extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  /**
   * An array of child elements.
   */
  readonly children: object[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The width and height in pixels of each item in the list.
   * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
   */
  itemSize: _Dimension

  /**
   * The array of top-level items displayed in the list.
   * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method.
   */
  readonly items: ListItem[]

  /**
   * The currently selectedlist item.
   * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.
   */
  selection: ListItem

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string

  /**
   * Adds an item to the top-level choices in this list.
   * Returns the item control object.
   * @param type The type of the child element, the string "item" or "node".
   * @param text The localizable text label for the item.
   * @param index The index into the current item list after which this item is inserted. If not supplied, or greater than the current list length, the new item is added at the end.
   */
  add(type: "item" | "node", text?: string, index?: number): ListItem

  /**
   * Retrieves an item object from the list that has a given text label.
   * @param text The text string to match.
   */
  find(text: string): ListItem

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void

  /**
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange(): void

  /**
   * An event-handler callback function, called when the user collapses (closes) an expanded node in the treeview.
   * @param item The ListItem node that collapsed.
   */
  onCollapse(item: ListItem): void

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * An event-handler callback function, called when the user expands (opens) a collapsed node in the treeview.
   * @param item The ListItem node that expanded.
   */
  onExpand(item: ListItem): void

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void

  /**
   * Removes a child item from the list.
   * @param what The item or child to remove, specified by 0-based index in the top-level item list, text value, or as a ListItem object.
   */
  remove(what: any): void

  /**
   * Removes all child items from the list.
   */
  removeAll(): void
}

/**
 * A control that contains a Flash Player, which can load and play Flash movies stored in SWF files.
 * The ScriptUI FlashPlayer element runs the Flash application within an Adobe application. The Flash application runs ActionScript, a different implementation of JavaScript from the ExtendScript version of JavaScript that Adobe applications run. A control object of this type contains functions that allow your script to load SWF files, control movie playback, and communicate with the ActionScript environment.
 */
declare class FlashPlayer extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean

  title: string
  titleLayout: _TitleLayout

  /**
   * A function definition for a callback from the Flash ActionScript environment.
   * The Flash ActionScript code can call any callback function defined on the ExtendScript side of the FlashPlayer object, invoking it by name as a property of the control object. The function can take any arguments of a supported data types, and can return any value of a supported data type. data types:Number, String, Boolean, null, undefined, Object, Array.
   */
  callback(): void

  /**
   * Invokes an ActionScript function defined in the Flash application.
   * Returns the result of the invoked function, which must be one of the allowed types. The ActionScript class and date objects are not supported as return values.
   * @param name The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.
   * @param argument An argument to pass through to the function. There can be any number of arguments. An argument must be one of these data types:Number, String, Boolean, null, undefined, Object, Array. No other data types are supported.
   */
  invokePlayerFunction(name: string, argument?: any): any

  /**
   * Loads a movie into the Flash Player, and begins playing it.
   * @param file The File object for the SWF file to load.
   */
  loadMovie(file: File): void

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void

  /**
   * Restarts a movie that has been stopped.
   * Do not use on a movie that is currently playing.The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).
   * @param rewind When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped.
   */
  playMovie(rewind: boolean): void

  /**
   * Halts playback of the current movie.
   * The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).Using stopMovie() from the player's hosting environment has no effect on an SWF file playing in a ScriptUI Flash Player element. It is, however, possible to produce an SWF using Flash Authoring that can stop itself in response to user interaction.
   */
  stopMovie(): void
}

/**
 * A container for other controls within a window.
 * A group can specify layout options for its child elements. Hiding a group hides all its children. Making it visible makes visible those children that are not individually hidden.
 */
declare class Group extends _Control {
  /**
   * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
   * Order of creation determines which children are at the top of a column or the left of a row; the earlier a child is created, the closer it is to the top or left of its column or row. If defined, alignment for a child element overrides the alignChildren setting for the parent container. See alignment property for values.
   */
  alignChildren: _AlignmentProperty

  /**
   * An array of child elements.
   */
  readonly children: _Control[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The layout manager for this container.
   * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
   */
  layout: AutoLayoutManager

  /**
   * The number of pixels between the edges of a container and the outermost child elements.
   * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
   */
  margins: _Margins

  /**
   * The layout orientation of children in a container.
   * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
   */
  orientation: _Orientation

  /**
   * The number of pixels separating one child element from its adjacent sibling element.
   * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
   */
  spacing: number

  /**
   * Adds a child element to this container.
   * Creates and returns a new control or container object and adds it to the children of this group.
   * @param type The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.
   * @param bounds A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.
   * @param text The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.
   * @param properties An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.
   */
  add: _AddControl

  /**
   * An event-handler callback function, called when the group is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * Removes the specified child control from this group's children array.
   * No error results if the child does not exist.
   * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
   */
  remove(what: any): void
}

/**
 * A container for other types of controls, with an optional frame.
 * A panel can specify layout options for its child elements. Hiding a panel hides all its children. Making it visible makes visible those children that are not individually hidden.
 */
declare class Panel extends _Control {
  /**
   * Specifies how to align the child elements.
   */
  alignChildren: _AlignmentProperty

  /**
   * Reserve space for the specified number of characters; affects calculation of preferredSize .
   */
  characters: number

  /**
   * An array of child elements.
   */
  readonly children: _Control[]

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: _Justify

  /**
   * The layout manager for this container.
   * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
   */
  layout: AutoLayoutManager

  /**
   * The number of pixels between the edges of a container and the outermost child elements.
   * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
   */
  margins: _Margins

  /**
   * The layout orientation of children in a container.
   * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
   */
  orientation: _Orientation

  /**
   * The number of pixels separating one child element from its adjacent sibling element.
   * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
   */
  spacing: number

  /**
   * The title or label text, a localizable string.
   */
  text: string

  /**
   * Adds a child element to this container.
   * Creates and returns a new control or container object and adds it to the children of this group.
   * @param type The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.
   * @param bounds A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.
   * @param text The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.
   * @param properties An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.
   */
  add: _AddControl

  /**
   * An event-handler callback function, called when the panel is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(drawState: DrawState): void

  /**
   * Removes the specified child control from this group's children array.
   * No error results if the child does not exist.
   * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
   */
  remove(what: any): void
}

/**
 * A container for other types of controls.
 * Differs from a panel element in that is must be a direct child of a tabbedpanel element, the title is shown in the selection tab, and it does not have a script-definable border.
 */
declare class Tab extends Panel {
  /**
   * The parent element.
   */
  readonly parent: TabbedPanel
}

/**
 * A container for selectable tab containers.
 * Differs from a panel element in that it can contain only tab elements as direct children.
 */
declare class TabbedPanel extends _Control {
  /**
   * An array of child elements.
   */
  readonly children: Tab[]

  /**
   * The currently selected tab.
   * Setting this value causes the specified tab to be enabled in the panel.
   * You can set the value using the index of an item, rather than an object reference.
   * If set to an index value that is out of range, the operation is ignored.
   * When set with an index value, the property still returns an object reference.
   * When the value of the selection property changes, either by a user selecting a different tab, or by a script setting the property, the TabbedPanel receives an onChange notification.
   */
  selection: Tab | number

  title: string
  titleLayout: _TitleLayout

  /**
   * Adds a tab to this tabbed panel.
   * Returns the created tab control object.
   *
   * Note: "bounds" is not used; pass "undefined"
   */
  add(type: "tab", bounds?: undefined, text?: string, properties?: _AddControlProperties): Tab

  /**
   * An event-handler callback function, called when the selected tab has changed.
   */
  onChange(): void
}

/**
 * Defines the location of a window or UI element. Contains a 2-element array.
 * Specifies the origin point of an element as horizontal and vertical pixel offsets from the origin of the element's coordinate space.
 * A Point object is created when you set an element’s location property. You can set the property using a JavaScript object with properties named x and y, or an array with 2 values in the order [x, y].
 */
declare class Point extends Array<number> {
  /**
   * The left coordinate.
   */
  left: number

  /**
   * The top coordinate.
   */
  top: number

  /**
   * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  x: number

  /**
   * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  y: number
}

/**
 * Defines the size of a window or UI element. Contains a 2-element array.
 * Specifies the height and width of an element in pixels. A Dimension object is created when you set an element’s size property. You can set the property using a JavaScript object with named properties {width: wd, height: ht}, or an array with 2 values in the order [wd, ht].
 */
declare class Dimension extends Array<number> {
  /**
   * The height in pixels.
   */
  height?: number

  /**
   * The width in pixels.
   */
  width?: number
}

/**
 * Defines the boundaries of a window within the screen’s coordinate space, or of a UI element within the container’s coordinate space.
 * A Bounds object is created when you set an element’s bounds property. You can set the property using a JavaScript object with properties named left, top, right, bottom or x, y, width, height, or an array with 4 values in the order [x, y, wd, ht].
 */
declare class Bounds extends Array<number> {
  /**
   * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  bottom?: number

  /**
   * The height in pixels.
   */
  height?: number

  /**
   * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  left?: number

  /**
   * The width in pixels.
   */
  right?: number

  /**
   * The height in pixels.
   */
  top?: number

  /**
   * The width in pixels.
   */
  width?: number

  /**
   * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  x?: number

  /**
   * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  y?: number
}

/**
 * Defines the number of pixels between the edges of a container and its outermost child elements.
 * Contains an array [ left, top, right, bottom ] whose elements define the margins between the left edge of a container and its leftmost child element, and so on.
 *
 * A Margins object is created when you set an element’s margins property.
 * An object must contain properties named left, top, right, and bottom.
 * An array must have values in the order [ left, top, right, bottom ].
 * You can also set the margins property to a number; all of the array values are then set to this number.
 */
declare class Margins extends Array<number> {
  /**
   * Defines the number of pixels between the left edge of a container and its leftmost child element.
   */
  left: number
  /**
   * Defines the number of pixels between the right edge of a container and its rightmost child element.
   */
  right: number
  /**
   * Defines the number of pixels between the top edge of a container and its top child element.
   */
  top: number
  /**
   * Defines the number of pixels between the bottom edge of a container and its bottom child element.
   */
  bottom: number
}

/**
 * Encapsulates input event information for an event that propagates through a container and control hierarchy.
 * Implements W3C standard event handling. This object is passed to a function that you register to respond to events of a certain type that occur in a window or control. Use windowObj.addEventListener() or controlObj.addEventListener() to register a handler function.
 */
declare class UIEvent {
  /**
   * True if the event is of a type that bubbles.
   */
  readonly bubbles: boolean

  /**
   * True if the default action associated with the event can be canceled with preventDefault().
   */
  readonly cancelable: boolean

  /**
   * True if this event can be captured.
   */
  readonly captures: boolean

  /**
   * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
   */
  readonly currentTarget: boolean

  /**
   * The click count for a mouse-click event.
   */
  readonly detail: any

  /**
   * The current phase of event propagation; one of none, target, capture, bubble.
   */
  readonly eventPhase: number

  /**
   * The event target object for this event.
   */
  readonly target: object

  /**
   * The date and time at which the event occurred.
   */
  readonly timeStamp: Date

  /**
   * The name of the event that thisobject represents.
   * Event types are listed in the JavaScript Tools Guide.
   */
  readonly type: string

  /**
   * The ScriptUI element that this event relates to.
   */
  readonly view: any

  /**
   * Creates an event.
   * The UIEvent object is normally created by ScriptUI and passed to your event handler. However, you can simulate a user action by constructing an event object and sending it to a target object’s dispatchEvent() function.
   * @param type The event type. See UIEvent.type property.
   * @param captures Set to true if this event can be captured.
   * @param bubbles Set to true if the event bubbles.
   * @param view The ScriptUI element that this event relates to.
   * @param detail The click count for a mouse-click event.
   */
  constructor(type: string, captures: boolean, bubbles: boolean, view?: object, detail?: number)

  /**
   * Initializes a UI event as a core W3C event.
   * @param type The event type.
   * @param captures Set to true if this event can be captured.
   * @param bubbles Set to true if the event bubbles.
   * @param cancelable Set to true if the default action is cancelable.
   */
  initEvent(type: string, captures: boolean, bubbles: boolean, cancelable: boolean): void

  /**
   * Initializes an event.
   * @param type The event type.
   * @param captures Set to true if this event can be captured.
   * @param bubbles Set to true if the event bubbles.
   * @param view The ScriptUI element that this event relates to.
   * @param detail The click count for a mouse-click event.
   */
  initUIEvent(
    type: string,
    captures: boolean,
    bubbles: boolean,
    view?: object,
    detail?: number,
  ): void

  /**
   * Prevents the default action associated with this event from being called.
   */
  preventDefault(): void

  /**
   * Stops the propagation of this event.
   */
  stopPropagation(): void
}

/**
 * Base class for UIEvent.
 * Encapsulates input event information for an event that propagates through a container and control hierarchy.Implements W3C standard event handling.
 */
declare class Event {
  /**
   *
   */
  static readonly AT_TARGET: any

  /**
   *
   */
  static readonly BUBBLING_PHASE: any

  /**
   *
   */
  static readonly CAPTURING_PHASE: any

  /**
   *
   */
  static readonly NOT_DISPATCHING: any

  /**
   * True if the event is of a type that bubbles.
   */
  readonly bubbles: boolean

  /**
   * True if the default action associated with the event can be canceled with preventDefault().
   */
  readonly cancelable: boolean

  /**
   * True if this event can be captured.
   */
  readonly captures: boolean

  /**
   * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
   */
  readonly currentTarget: boolean

  /**
   * The current phase of event propagation; one of none, target, capture, bubble.
   */
  readonly eventPhase: number

  /**
   * The event target object for this event.
   */
  readonly target: object

  /**
   * The date and time at which the event occurred.
   */
  readonly timeStamp: Date

  /**
   * The name of the event that this object represents.
   * Event types are listed in the JavaScript Tools Guide.
   */
  readonly type: string

  /**
   * Prevents the default action associated with this event from being called.
   */
  preventDefault(): void

  /**
   * Stops the propagation of this event.
   */
  stopPropagation(): void
}

/**
 * Defines attributes of the ScriptUI environment.
 * Access through the ScriptUI.environment property.
 */
declare class Environment {
  /**
   * An object that reports the active state of the keyboard at any time.
   * Provides access to the key state independent of the event-handling framework.
   */
  readonly keyboardState: KeyboardState
}

/**
 * Provides access to objects used in the ScriptUI event system.
 * Access through the ScriptUI.events property.
 */
declare class Events {
  /**
   * Creates an instance of the specified Event subclass.
   * The Event returned is a UIEvent,
   * KeyboardEvent or MouseEvent object,
   * depending on the requested type. This object can be passed as a parameter to an element's dispatchEvent
   * function in order to simulate a user-interaction event.
   * @param eventType The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
   */
  createEvent(eventType: string): Event
}

/**
 * Reports the active state of the keyboard.
 * Access through the ScriptUI.environment.keyboardState property.
 * Query the properties of this object at any time to determine the current key that is down and any modifiers that are pressed.
 */
declare class KeyboardState {
  /**
   * True if the Alt or Option key is pressed.
   */
  readonly altKey: boolean

  /**
   * True if the Ctrl key is pressed.
   */
  readonly ctrlKey: boolean

  /**
   * A string containing the name of the currently pressed key, such as "a", or an empty string.
   */
  readonly keyName: string

  /**
   * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
   */
  readonly metaKey: boolean

  /**
   * True if the Shift key is pressed.
   */
  readonly shiftKey: boolean
}

declare class KeyboardEvent extends UIEvent implements KeyboardState {
  altKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  shiftKey: boolean
  keyIdentifier: string
  keyLocation: number
  keyName: string
  type: string
  getModifierState(
    keyIdentifier: "Alt" | "CapsLock" | "Control" | "Meta" | "NumLock" | "Scroll" | "Shift",
  ): boolean
  initKeyboardEvent(
    eventName: string,
    bubble: boolean,
    isCancelable: boolean,
    view: _Control,
    keyID: string,
    keyLocation: number,
    modifiersList: string,
  ): void
}

/**
 * A Control class.
 */
declare class _Control {
  /**
   * The alignment style for child elements of a container. If defined, this value overrides the alignChildren setting for the parent container.
   * This can be a single string, which indicates the alignment for the orientation specified in the parent container, or an array of two strings, indicating both the horizontal and vertical alignment (in that order). Allowed values depend on the orientation value of the parent container. They are not case sensitive.
   * For orientation = row: top, bottom, fill
   * For orientation = column: left, right, fill
   * For orientation = stack: top, bottom, left, right, fill
   */
  alignment: _AlignmentProperty

  /**
   * The boundaries of the element, in parent-relative coordinates.
   * Setting an element's size or location changes its bounds property, and vice-versa.
   */
  bounds: _Bounds

  /**
   * True if this element is enabled.
   * An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.
   */
  enabled: boolean

  /**
   * The help text that is displayed when the mouse hovers over the element.
   */
  helpTip: string

  /**
   * The number of pixels to indent the element during automatic layout.
   * Applies for column orientation and left alignment, or row orientation and top alignment.
   */
  indent: number

  /**
   * The upper left corner of this element relative to its parent.
   * The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.
   */
  location: Point

  /**
   * The maximum height and width to which the element can be resized.
   */
  maximumSize: _Dimension

  /**
   * The minimum height and width to which the element can be resized.
   */
  minimumSize: _Dimension

  /**
   * The parent element.
   */
  readonly parent: _Control

  /**
   * The preferred size, used by layout managers to determine the best size for each element.
   * If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes. A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
   * To set a specific value for only one dimension, specify the other dimension as -1.
   */
  preferredSize: _Dimension

  /**
   * The current dimensions of this element.
   * Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.
   */
  size: _Dimension

  /**
   * The element type.
   */
  readonly type: string

  /**
   * True if this element is shown, false if it is hidden.
   * When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.
   */
  visible: boolean

  /**
   * The window that this element belongs to.
   */
  readonly window: Window

  /**
   * The bounds of this element relative to the top-level parent window.
   */
  readonly windowBounds: _Bounds

  /**
   * Registers an event handler for a particular type of event occurring in this element.
   * @param eventName The name of the event. Event names are listed in the JavaScript Tools Guide.
   * @param handler The function that handles the event. This can be the name of a function defined in the extension, or a locally defined handler function to be executed when the event occurs. A handler function takes one argument, the UIEvent object.
   * @param capturePhase When true, the handler is called only in the capturing phase of the event propagation. Default is false, meaning that the handler is called in the bubbling phase if this object is an ancestor of the target, or in the at-target phase if this object is itself the target.
   */
  addEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean

  /**
   * Simulates the occurrence of an event in this target.
   * A script can create a UIEvent object for a specific event and pass it to this method to start the event propagation for the event.
   */
  dispatchEvent(): Event

  /**
   * Searches for the named element among the children of this window or container, and returns the object if found.
   */
  findElement(name: string): _Control | null

  /**
   * Hides this element.
   */
  hide(): void

  /**
   * Unregisters an event handler for a particular type of event occurring in this element.
   * All arguments must be identical to those that were used to register the event handler.
   * @param eventName The name of the event.
   * @param handler The function that handles the event.
   * @param capturePhase Whether to call the handler only in the capturing phase of the event propagation.
   */
  removeEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean

  /**
   * Shows this element.
   * When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
   * If an onShow() callback is defined for a window, calls that function before showing the window.When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states. For a modal dialog, opens the dialog and does not return until the dialog is dismissed. If it is dismissed via the close() method, this method returns any result value passed to that method. Otherwise, returns 0.
   */
  show(): number | undefined
}

/**
 * Creation properties.
 * @param name A unique name for the control.
 */
interface _AddControlProperties {
  name?: string
}

/**
 * Creation properties of a DropDownList.
 * @param name A unique name for the control.
 * @param items An array of strings for the text of each list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
 */
interface _AddControlPropertiesDropDownList {
  name?: string
  items?: string[]
}

/**
 * Creation properties of an EditText.
 * @param name A unique name for the control.
 * @param multiline When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.
 * @param borderless When true, the control is drawn with no border. Default is false.
 * @param scrollable For multiline elements only. When true (the default), the text field has a vertical scrollbar that is enabled when the element contains more text than fits in the visible area. When false, no vertical scrollbar appears; if the element contains more text than fits in the visible area, the arrow keys can be used to scroll the text up and down.
 * @param readonly When false (the default), the control accepts text input. When true, the control does not accept input but only displays the contents of the text property.
 * @param noecho When false (the default), the control displays input text. When true, the control does not display input text (used for password input fields).
 * @param enterKeySignalsOnChange When false (the default), the control signals an onChange event when the editable text is changed and the control loses the keyboard focus (that is, the user tabs to another control, clicks outside the control, or types Enter). When true, the control only signals an onChange() event when the editable text is changed and the user types Enter; other changes to the keyboard focus do not signal the event.
 * @param wantReturn Only applies to multiple line edit controls in ScriptUI Version 6.0 or later. When true the RETURN/ENTER keystroke is considered as text-input advancing the cursor to the next line. The default value is false.
 */
interface _AddControlPropertiesEditText {
  name?: string
  multiline?: boolean
  borderless?: boolean
  scrollable?: boolean
  readonly?: boolean
  noecho?: boolean
  enterKeySignalsOnChange?: boolean
  wantReturn?: boolean
}

/**
 * Creation properties of an IconButton.
 * @param name A unique name for the control.
 * @param style A string for the visual style, either "button", which has a visible border with a raised or 3D appearance, or "toolbutton", which has a flat appearance, appropriate for inclusion in a toolbar.
 * @param toggle For a button-style control, a value of true causes it to get a button-pressed appearance the first time it is clicked, and alternate with the unpressed appearance each time it is clicked. The toggle state is reflected in the control’s value property.
 */
interface _AddControlPropertiesIconButton {
  name?: string
  style?: "button" | "toolbutton"
  toggle?: boolean
}

/**
 * Creation properties of a ListBox.
 * @param name A unique name for the control.
 * @param multiselect When false (the default), only one item can be selected. When true, multiple items can be selected.
 * @param selected When true, multiple items can be selected.
 * @param items An array of strings for the text of each list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
 * @param numberOfColumns A number of columns in which to display the items; default is 1. When there are multiple columns, each ListItem object represents a selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
 * @param showHeaders True to display column titles.
 * @param columnWidths An array of numbers for the preferred width in pixels of each column.
 * @param columnTitles A corresponding array of strings for the title of each column, to be shown if showHeaders is true.
 */
interface _AddControlPropertiesListBox {
  name?: string
  multiselect?: boolean
  selected?: boolean
  items?: string[]
  numberOfColumns?: number
  showHeaders?: boolean
  columnWidths?: number[]
  columnTitles?: string[]
}

/**
 * Creation properties of a Panel.
 * @param name A unique name for the control.
 * @param borderStyle A string that specifies the appearance of the border drawn around the panel. One of black, etched, gray, raised, sunken. Default is etched.
 * @param su1PanelCoordinates Photoshop only. When true, this panel automatically adjusts the positions of its children for compatibility with Photoshop CS. Default is false, meaning that the panel does not adjust the positions of its children, even if the parent window has automatic adjustment enabled.
 */
interface _AddControlPropertiesPanel {
  name?: string
  borderStyle?: string
  su1PanelCoordinates?: boolean
}

/**
 * Creation properties of a StaticText.
 * @param name A unique name for the control.
 * @param multiline When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.
 * @param scrolling When false (the default), the displayed text cannot be scrolled. When true, the displayed text can be vertically scrolled using the Up Arrow and Down Arrow; this case implies multiline=true.
 * @param truncate If middle or end, defines where to remove characters from the text and replace them with an ellipsis if the specified title does not fit within the space reserved for it. If none, and the text does not fit, characters are removed from the end, without any replacement ellipsis character.
 */
interface _AddControlPropertiesStaticText {
  name?: string
  multiline?: boolean
  scrolling?: boolean
  truncate?: _Truncate
}

/**
 * Creation properties of a TreeView.
 * @param name A unique name for the control.
 * @param items An array of strings for the text of each top-level list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
 */
interface _AddControlPropertiesTreeView {
  name?: string
  items?: string[]
}

/**
 * Creation properties of a Window.
 * @param resizeable When true, the window can be resized by the user. Default is false.
 * @param su1PanelCoordinates Photoshop only. When true, the child panels of this window automatically adjust the positions of their children for compatibility with Photoshop CS (in which the vertical coordinate was measured from outside the frame). Default is false. Individual panels can override the parent window’s setting.
 * @param closeButton Bridge only. When true, the title bar includes a button to close the window, if the platform and window type allow it. When false, it does not. Default is true. Not used for dialogs.
 * @param maximizeButton Bridge only. When true, the title bar includes a button to expand the window to its maximum size (typically, the entire screen), if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Not used for dialogs.
 * @param minimizeButton Bridge only. When true, the title bar includes a button to minimize or iconify the window, if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Main windows cannot have a minimize button in Mac OS. Not used for dialogs.
 * @param independent When true, a window of type window is independent of other application windows, and can be hidden behind them in Windows. In Mac OS, has no effect. Default is false.
 * @param borderless When true, the window has no title bar or borders. Properties that control those features are ignored.
 */
interface _AddControlPropertiesWindow {
  resizeable?: boolean
  su1PanelCoordinates?: boolean
  closeButton?: boolean
  maximizeButton?: boolean
  minimizeButton?: boolean
  independent?: boolean
  borderless?: boolean
}

interface _AddControl {
  /**
   * Creation of a Button.
   * The third argument can be the initial text value.
   * Special name "ok" makes the button primary for parent dialog, and the special name "cancel" makes the button default cancel button for parent dialog.
   */
  (type: "button", bounds?: _Bounds, text?: string, properties?: _AddControlProperties): Button

  /**
   * Creation of a CheckBox.
   * The third argument is the text to be displayed.
   */
  (type: "checkbox", bounds?: _Bounds, text?: string, properties?: _AddControlProperties): Checkbox

  /**
   */
  (
    type: "dropdownlist",
    bounds?: _Bounds,
    items?: string[],
    properties?: _AddControlPropertiesDropDownList,
  ): DropDownList

  /**
   */
  (
    type: "edittext",
    bounds?: _Bounds,
    text?: string,
    properties?: _AddControlPropertiesEditText,
  ): EditText

  /**
   */
  (
    type: "flashplayer",
    bounds?: _Bounds,
    movieToLoad?: string | File,
    properties?: _AddControlProperties,
  ): FlashPlayer

  /**
   */
  (type: "group", bounds?: _Bounds, properties?: _AddControlProperties): Group

  /**
   */
  (
    type: "iconbutton",
    bounds?: _Bounds,
    icon?: string | File,
    properties?: _AddControlPropertiesIconButton,
  ): IconButton

  /**
   */
  (type: "image", bounds?: _Bounds, icon?: string | File, properties?: _AddControlProperties): Image

  /**
   */
  (
    type: "listbox",
    bounds?: _Bounds,
    items?: string[],
    properties?: _AddControlPropertiesListBox,
  ): ListBox

  /**
   */
  (type: "panel", bounds?: _Bounds, text?: string, properties?: _AddControlPropertiesPanel): Panel

  /**
   * Creation of a ProgressBar.
   * The third argument is the initial value (default 0), and the fourth argument is the maximum value of the range (default 100).
   */
  (
    type: "progressbar",
    bounds?: _Bounds,
    value?: number,
    max?: number,
    properties?: _AddControlProperties,
  ): Progressbar

  /**
   * Creation of a RadioButton.
   * The third argument can be the label text.
   */
  (
    type: "radiobutton",
    bounds?: _Bounds,
    text?: string,
    properties?: _AddControlProperties,
  ): RadioButton

  /**
   * Creation of a Scrollbar.
   * The third argument is the initial value, and the fourth and fifth arguments are the minimum and maximum values of the range.
   */
  (
    type: "scrollbar",
    bounds?: _Bounds,
    value?: number,
    min?: number,
    max?: number,
    properties?: _AddControlProperties,
  ): Scrollbar

  /**
   * Creation of a Slider.
   * The third argument is the initial value, and the fourth and fifth arguments are the minimum and maximum values of the range.
   */
  (
    type: "slider",
    bounds?: _Bounds,
    value?: number,
    min?: number,
    max?: number,
    properties?: _AddControlProperties,
  ): Slider

  /**
   */
  (
    type: "statictext",
    bounds?: _Bounds,
    text?: string,
    properties?: _AddControlPropertiesStaticText,
  ): StaticText

  /**
   */
  (
    type: "tabbedpanel",
    bounds?: _Bounds,
    text?: string,
    properties?: _AddControlProperties,
  ): TabbedPanel

  /**
   */
  (
    type: "treeview",
    bounds?: _Bounds,
    items?: string[],
    properties?: _AddControlPropertiesTreeView,
  ): TreeView
}

interface _TitleLayout {
  alignment?: _AlignmentPropertyTitleLayout
  characters?: number
  spacing?: number
  margins?: [number, number, number, number]
  justify?: _Justify
  truncate?: _Truncate
}

// ________________________________________________________________________________
// ________________________________________________________________________________

// source: PlugPlugExternalObject.d.ts

interface ExternalObjectConstructor {
  readonly prototype: ExternalObject

  /**
   * Creates a new ExternalObject object.
   */
  new (lib: string): ExternalObject
  (lib: string): ExternalObject
}
declare const ExternalObject: ExternalObjectConstructor

interface ExternalObject {
  /**
   * Set to true to write status information to standard output (the
   * JavaScript Console in the ExtendScript Toolkit). Set to false to turn
   * logging off. Default is false.
   */
  log: boolean

  /**
   * A set of alternate paths in which to search for the shared library files, a
   * single string with multiple path specifications delimited by semicolons
   * (;). Paths can be absolute or relative to the Folder.startup location.
   */
  searchFolders: string

  /**
   * The version of the library, as returned by ESGetVersion()
   */
  version: number

  /**
   * Reports whether a compiled C/C++ library can be found, but does not load it. If logging is on, the
   * paths searched are reported to the JavaScript Console in the ExtendScript Toolkit.
   * Returns true if the library is found, false otherwise.
   * @param spec The file specification for the compiled library, with or without path information.
   */
  search(spec: string): boolean

  /**
   * Explicitly shuts down the ExternalObject dynamic library wrapped by this instance.
   * It can be helpful to force a shutdown of the external library if termination of external libraries during
   * the shutdown of the hosting application does not occur in the correct order.
   */
  terminate(): undefined
}

interface CSXSEventConstructor {
  readonly prototype: CSXSEvent

  /**
   * Creates a new CSXSEvent object.
   */
  new (type?: string, scope?: string, data?: string): CSXSEvent
  (type?: string, scope?: string, data?: string): CSXSEvent
}
declare const CSXSEvent: CSXSEventConstructor

interface CSXSEvent {
  /**
   * Retrieves the unique identifier of the application from which this event was dispatched.
   */
  readonly appId: string

  /**
   * Retrieves or sets the payload of this event.
   */
  data: string

  /**
   * Retrieves the unique identifier of the extension from which this event was dispatched.
   */
  readonly extensionId: string

  /**
   * Retrieves the scope of this event.
   */
  scope: string

  /**
   * Retrieves the type of this event.
   */
  type: string

  /**
   * Dispatch the event
   */
  dispatch(): void
}


// ________________________________________________________________________________
// ________________________________________________________________________________

// source: XMPScript.d.ts

// A commonly used construct for loading XMPScript into
// ExtendScript contexts.
interface ExternalObjectConstructor {
  AdobeXMPScript: ExternalObject | undefined
}

interface XMPMetaConstructor {
  /** Creates an empty object. */
  new (): XMPMetaInstance
  /**
   * @param packet A String containing an XML file or an XMP packet.
   */
  new (packet: string): XMPMetaInstance
  /**
   * @param buffer The UTF-8 or UTF-16 encoded bytes of an XML file
   * or an XMP packet. This array is the result of a call to "serializeToArray"
   * on an "XMPMeta" instance.
   */
  new (buffer: number[]): XMPMetaInstance
  /**
   * @param prefix The prefix of the namespace.
   * @example XMPMeta.getNamespacePrefix('xmp'); // 'http://ns.adobe.com/xap/1.0/'
   */
  getNamespaceURI(prefix: string): string
  /**
   * @param uri The URI of the namespace.
   * @example XMPMeta.getNamespacePrefix('http://ns.adobe.com/xap/1.0/'); // 'xmp:'
   */
  getNamespacePrefix(uri: string): string
}
type XMPProperty = {
  locale: string
  namespace: string
  options: string
  path: string
  value: string
}
interface XMPMetaInstance {
  doesPropertyExist(namespace: string, value: string): boolean
  getProperty(namespace: string, property: string): XMPProperty
  setProperty(namespace: string, property: string, value: string): boolean
  countArrayItems(namespace: string, property: string): number
  getArrayItem(namespace: string, property: string, itemIndex: number): XMPProperty
  deleteProperty(namespace: string, property: string): boolean
  appendArrayItem(
    namespace: string,
    property: string,
    arrayOptions: string,
    valueToAppend: string,
    valueOptions: string,
  ): boolean
  dumpObject(): string
  serialize(): string
  getNamespaceURI(ns: string): string
}

declare const XMPMeta: XMPMetaConstructor | undefined

interface XMPConstConstructor {
  new (): XMPConstInstance
  NS_DM: string
  NS_DC: string
  ARRAY_IS_ORDERED: string
}

interface XMPConstInstance {
  // Instance stuff.
}

declare const XMPConst: XMPConstConstructor | undefined


// ________________________________________________________________________________
// ________________________________________________________________________________

// source: global.d.ts

/**
 * The global BridgeTalk object.
 */
declare var BridgeTalk: any

/**
 * The Infinity global property is a predefined variable with the value for infinity.
 */
declare var Infinity: number

/**
 * The NaN global property is a predefined variable with the value NaN (Not-a-Number), as specified by the IEEE-754 standard.
 */
declare var NaN: number

/**
 * The application object
 */
declare var app: Application
declare interface Application {}

/**
 * Displays an alert box
 * @param message The text to display
 * @param title The title of the alert; ignored on the Macintosh
 * @param errorIcon Display an Error icon; ignored on the Macintosh
 */
declare function alert(message: string, title?: string, errorIcon?: boolean): void

/**
 * Displays an alert box with Yes and No buttons; returns true for Yes
 * @param message The text to display
 * @param noAsDefault Set to true to set the No button as the default button
 * @param title The title of the alert; ignored on the Macintosh
 */
declare function confirm(message: string, noAsDefault?: boolean, title?: string): boolean

/**
 * Decodes a string created with encodeURI().
 * @param uri The text to decode.
 */
declare function decodeURI(uri: string): string

/**
 * Decodes a string created with encodeURIComponent().
 * @param uri The text to decode.
 */
declare function decodeURIComponent(uri: string): string

/**
 * Encodes a string after RFC2396.
 * Create an UTF-8 ASCII encoded version of this string. The string is converted into UTF-8. Every non-alphanumeric character is encoded as a percent escape
 * character of the form %xx, where xx is the hex value of the character. After the conversion to UTF-8 encoding and escaping, it is guaranteed that the string does not contain characters codes greater than 127. The list of characters not to be encoded is -_.!~*'();/?:@&=+$,#. The method returns false on errors.
 * @param text The text to encode.
 */
declare function encodeURI(text: string): string

/**
 * Encodes a string after RFC2396.
 * Create an UTF-8 ASCII encoded version of this string. The string is converted into UTF-8. Every non-alphanumeric character is encoded as a percent escape
 * character of the form %xx, where xx is the hex value of the character. After the conversion to UTF-8 encoding and escaping, it is guaranteed that the string does not contain characters codes greater than 127. The list of characters not to be encoded is -_.!~*'(). The method returns false on errors.
 * @param text The text to encode.
 */
declare function encodeURIComponent(text: string): string

/**
 * Creates a URL-encoded string from aString.
 * In the new string, characters of aString that require URL encoding are replaced with the format %xx, where xx is the hexadecimal value of the character code in the Unicode character set.This format is used to transmit information appended to a URL during, for example, execution of the GET method.Use the unescape() global function to translate the string back into its original format. Returns a string which is aString URL-encoded.
 * @param aString The string to be encoded.
 */
declare function escape(aString: string): string

/**
 * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
 * You can pass the result of an object's toSource() method to reconstruct that object.
 * @param stringExpression The string to evaluate.
 */
declare function eval(stringExpression: string): any

/**
 * Evaluates an expression and reports whether the result is a finite number.
 * Returns true if the expression is a finite number, false otherwise. False if the value is infinity or negative infinity.
 * @param expression Any valid JavaScript expression.
 */
declare function isFinite(expression: number): boolean

/**
 * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
 * Returns true if the result of evaluation is not a number (NaN), false if the value is a number.
 * @param expression Any valid JavaScript expression.
 */
declare function isNaN(expression: number): boolean

/**
 * Returns true if the supplied string is a valid XML name.
 * @param name The XML name to test.
 */
declare function isXMLName(name: string): boolean

/**
 * Localizes a ZString-encoded string and merges additional arguments into the string.
 * @param what The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
 * @param arguments Optional argument(s) to be merged into the string. There may be more than one argument.
 */
declare function localize(what: string, ...arguments: any[]): string

/**
 * Extracts a floating-point number from a string.
 * Parses a string to find the first set of characters that can be converted to a floating point number, and returns that number, or NaN if it does not encounter characters that it can converted to a number.The function supports exponential notation.
 * @param text The string from which to extract a floating point number.
 */
declare function parseFloat(text: string): number

/**
 * Extracts an integer from a string.
 * Parses a string to find the first set of characters, in a specified base, that can be converted to an integer, and returns that integer, or NaN if it does not encounter characters that it can convert to a number.
 * @param text The string from which to extract an integer.
 * @param base The base of the string to parse (from base 2 to base 36). If not supplied, base is determined by the format of string.
 */
declare function parseInt(text: string, base?: number): number

/**
 * Displays a dialog allowing the user to enter text
 * Returns null if the user cancelled the dialog, the text otherwise
 * @param prompt The text to display
 * @param default_ The default text to preset the edit field with
 * @param title The title of the dialog;
 */
declare function prompt(prompt: string, default_?: string, title?: string): string | null

/**
 * Defines the default XML namespace.
 * This is a replacement function for the standard JavaScript statement set default xml namespace.
 * @param namespace The namespace to use. Omit this parameter to return to the empty namespace. This is either a Namespace object or a string.
 */
declare function setDefaultXMLNamespace(namespace: Namespace): void

/**
 * Translates URL-encoded string into a regular string, and returns that string.
 * Use the escape() global function to URL-encode strings.
 * @param stringExpression The URL-encoded string to convert.
 */
declare function unescape(stringExpression: string): string

/**
 * Creates a source code representation of the supplied argument, and returns it as a string.
 * @param what The object to uneval.
 */
declare function uneval(what: any): string


// ________________________________________________________________________________
// ________________________________________________________________________________

// source: /Photoshop/2015.5/index.d.ts

/**
 * Document formats that Photoshop can open.
 */
declare enum OpenDocumentType {
  /**
   * Alias PIX format.
   */
  ALIASPIX = 25,

  /**
   * BMP format.
   */
  BMP = 2,

  /**
   * Camera RAW format.
   */
  CAMERARAW = 32,

  /**
   * CompuServe GIF format.
   */
  COMPUSERVEGIF = 3,

  /**
   * DICOM format.
   */
  DICOM = 33,

  /**
   * Electric format.
   */
  ELECTRICIMAGE = 26,

  /**
   * Generic EPS format.
   */
  EPS = 22,

  /**
   * EPS format with embedded PICT Preview.
   */
  EPSPICTPREVIEW = 23,

  /**
   * EPS format with embedded TIFF Preview.
   */
  EPSTIFFPREVIEW = 24,

  /**
   * Filmstrip format.
   */
  FILMSTRIP = 5,

  /**
   * JPEG format.
   */
  JPEG = 6,

  /**
   * PCX format.
   */
  PCX = 7,

  /**
   * Generic PDF format.
   */
  PDF = 21,

  /**
   * Photo CD format.
   */
  PHOTOCD = 9,

  /**
   * Photoshop format.
   */
  PHOTOSHOP = 1,

  /**
   * Photoshop DCS 1.0 format.
   */
  PHOTOSHOPDCS_1 = 18,

  /**
   * Photoshop DCS 2.0 format.
   */
  PHOTOSHOPDCS_2 = 19,

  /**
   * EPS document produced by Photoshop.
   */
  PHOTOSHOPEPS = 4,

  /**
   * PDF document produced by Photoshop.
   */
  PHOTOSHOPPDF = 8,

  /**
   * PICT file format.
   */
  PICTFILEFORMAT = 10,

  /**
   * PICT resource format.
   */
  PICTRESOURCEFORMAT = 11,

  /**
   * Pixar format.
   */
  PIXAR = 12,

  /**
   * PNG format.
   */
  PNG = 13,

  /**
   * Portable Bitmap format.
   */
  PORTABLEBITMAP = 27,

  /**
   * Raw format.
   */
  RAW = 14,

  /**
   * Scitex CT format.
   */
  SCITEXCT = 15,

  /**
   * SGI RGB format.
   */
  SGIRGB = 29,

  /**
   * SoftImage format.
   */
  SOFTIMAGE = 30,

  /**
   * Targa format.
   */
  TARGA = 16,

  /**
   * TIFF format.
   */
  TIFF = 17,

  /**
   * Wavefront RLA format.
   */
  WAVEFRONTRLA = 28,

  /**
   * Wireless Bitmap format (WBMP)
   */
  WIRELESSBITMAP = 31,
}

/**
 * Document formats that Photoshop can save to.
 */
declare enum SaveDocumentType {
  /**
   * Alias PIX format.
   */
  ALIASPIX = 25,

  /**
   * BMP format.
   */
  BMP = 2,

  /**
   * CompuServe GIF format.
   */
  COMPUSERVEGIF = 3,

  /**
   * Electric format.
   */
  ELECTRICIMAGE = 26,

  /**
   * JPEG format.
   */
  JPEG = 6,

  /**
   * PCX format.
   */
  PCX = 7,

  /**
   * Photoshop format.
   */
  PHOTOSHOP = 1,

  /**
   * Photoshop DCS 1.0 format.
   */
  PHOTOSHOPDCS_1 = 18,

  /**
   * Photoshop DCS 2.0 format.
   */
  PHOTOSHOPDCS_2 = 19,

  /**
   * EPS document produced by Photoshop.
   */
  PHOTOSHOPEPS = 4,

  /**
   * PDF document produced by Photoshop.
   */
  PHOTOSHOPPDF = 8,

  /**
   * PICT file format.
   */
  PICTFileFORMAT = 10,

  /**
   * PICT resource format.
   */
  PICTRESOURCEFORMAT = 11,

  /**
   * Pixar format.
   */
  PIXAR = 12,

  /**
   * PNG format.
   */
  PNG = 13,

  /**
   * Portable Bitmap format.
   */
  PORTABLEBITMAP = 27,

  /**
   * Raw format.
   */
  RAW = 14,

  /**
   * Scitex CT format.
   */
  SCITEXCT = 15,

  /**
   * SGI RGB format.
   */
  SGIRGB = 29,

  /**
   * SoftImage format.
   */
  SOFTIMAGE = 30,

  /**
   * Targa format.
   */
  TARGA = 16,

  /**
   * TIFF format.
   */
  TIFF = 17,

  /**
   * Wavefront RLA format.
   */
  WAVEFRONTRLA = 28,

  /**
   * Wireless Bitmap format (WBMP)
   */
  WIRELESSBITMAP = 31,
}

/**
 * Controls whether Photoshop displays dialogs during scripts.
 */
declare enum DialogModes {
  /**
   * Show all dialogs.
   */
  ALL = 1,

  /**
   * Show only dialogs related to errors.
   */
  ERROR = 2,

  /**
   * Show no dialogs.
   */
  NO = 3,
}

/**
 * Position of document when printing.
 */
declare enum DocPositionStyle {
  /**
   * Print image centered on page.
   */
  PRINTCENTERED = 1,

  /**
   * Resize image to fit on page when printing.
   */
  SIZETOFIT = 2,

  /**
   * Print using user defined spacing.
   */
  USERDEFINED = 3,
}

/**
 * Color conversion type when printing.
 */
declare enum PrintColorHandling {
  /**
   * Photoshop manages color conversions.
   */
  PHOTOSHOPMANAGED = 2,

  /**
   * Printer manages color conversions.
   */
  PRINTERMANAGED = 1,

  /**
   * Print each channel separately without color conversions.
   */
  SEPARATIONS = 3,
}

/**
 * The document's color mode.
 */
declare enum DocumentMode {
  /**
   * Bitmap, which uses one of two color values (black or white) to represent the pixels in an image.
   */
  BITMAP = 5,

  /**
   * CMYK.
   */
  CMYK = 3,

  /**
   * Duotone mode, which creates monotone, duotone (two-color), tritone (three-color), and quadtone (four-color) grayscale images using one to four custom inks.
   */
  DUOTONE = 8,

  /**
   * Grayscale.
   */
  GRAYSCALE = 1,

  /**
   * Indexed color, in which the number of colors in the image is at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications.
   */
  INDEXEDCOLOR = 6,

  /**
   * Lab.
   */
  LAB = 4,

  /**
   * Image with multiple color channels.
   */
  MULTICHANNEL = 7,

  /**
   * RGB.
   */
  RGB = 2,
}

/**
 * The destination color mode. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
 */
declare enum ChangeMode {
  /**
   * Bitmap. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode.
   */
  BITMAP = 5,

  /**
   * CMYK.
   */
  CMYK = 3,

  /**
   * Grayscale.
   */
  GRAYSCALE = 1,

  /**
   * Indexed color, in which the number of colors in the image is reduced to at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications.
   * This conversion reduces file size by deleting color information from the image. To convert to indexed color, you must start with an image that is 8 bits per channel and in either Grayscale or RGB mode.
   */
  INDEXEDCOLOR = 6,

  /**
   * Lab.
   */
  LAB = 4,

  /**
   * Image with multiple color channels.
   * Uses 256 levels of gray in each channel. Useful for specialized printing. Color channels in the original image become spot color channels in the converted image. A CMYK image converted to Multichannel mode creates cyan, magenta, yellow, and black spot channels. An RGB image converted Multichannel mode creates cyan, magenta, and yellow spot channels. The new grayscale information is based on the color values of the pixels in each channel. Multichannel mode images can be saved in Photoshop, Photoshop 2.0, Photoshop Raw, or Photoshop DCS 2.0 format. To export a multichannel image, save it in Photoshop DCS 2.0 format.
   */
  MULTICHANNEL = 7,

  /**
   * RGB.
   */
  RGB = 2,
}

/**
 * The type of color model that defines the document's working space.
 */
declare enum ColorProfileType {
  /**
   * Color manages this document using a custom color profile.
   */
  CUSTOM = 3,

  /**
   * The document is not color managed.
   */
  NONE = 1,

  /**
   * Color manages this document using the working color profile.
   */
  WORKING = 2,
}

/**
 * The document window fill type.
 */
declare enum DocumentFill {
  /**
   * The background color as displayed in the toolbox.
   */
  BACKGROUNDCOLOR = 2,

  /**
   * Transparent.
   */
  TRANSPARENT = 3,

  /**
   * White.
   */
  WHITE = 1,
}

/**
 * The editorial urgency status of the artwork.
 */
declare enum Urgency {
  /**
   * Level 4 (fourth highest)
   */
  FOUR = 4,

  /**
   * Highest level of urgency.
   */
  HIGH = 8,

  /**
   * Low.
   */
  LOW = 1,

  /**
   * No urgency.
   */
  NONE = 0,

  /**
   * Medium urgency.
   */
  NORMAL = 5,

  /**
   * Level 7 (second lowest)
   */
  SEVEN = 7,

  /**
   * Level 6 (third lowest)
   */
  SIX = 6,

  /**
   * Level 3 (third highest)
   */
  THREE = 3,

  /**
   * Level 2 (second highest)
   */
  TWO = 2,
}

/**
 * The image orientation on the media.
 */
declare enum Orientation {
  /**
   * Landscape.
   */
  LANDSCAPE = 1,

  /**
   * Portrait.
   */
  PORTRAIT = 2,
}

/**
 * The color conversion intent.
 */
declare enum Intent {
  /**
   * Aims to maintain color accuracy at the expense of preserving relationships between colors and is suitable for proofing to simulate the output of a particular device. This intent is particularly useful for previewing how paper color affects printed colors.
   * Leaves colors that fall inside the destination gamut unchanged. Out of gamut colors are clipped. No scaling of colors to destination white point is performed.
   */
  ABSOLUTECOLORIMETRIC = 4,

  /**
   * Gives priority to colors for which the human eye has greater sensitivity.
   * Suitable for photographic images with a lot of out of gamut colors. This is the standard rendering intent for the Japanese printing industry.
   */
  PERCEPTUAL = 1,

  /**
   * Compares the extreme highlight of the source color space to that of the destination color space and shifts all colors accordingly. Out of gamut colors are shifted to the closest reproducible color in the destination color space.
   * The standard rendering intent for printing in North America and Europe.
   */
  RELATIVECOLORIMETRIC = 3,

  /**
   * Tries to produce vivid colors in an image at the expense of color accuracy.
   * Suitable for business graphics like graphs or charts, where bright saturated colors are more important than the exact relationship between colors.
   */
  SATURATION = 2,
}

/**
 * The orientation of the object.
 */
declare enum Direction {
  /**
   * Horizontal.
   */
  HORIZONTAL = 1,

  /**
   * Vertical.
   */
  VERTICAL = 2,
}

/**
 * The cache to be targeted in a purge operation.
 */
declare enum PurgeTarget {
  /**
   * Clears all caches.
   */
  ALLCACHES = 4,

  /**
   * Clears the clipboard.
   */
  CLIPBOARDCACHE = 3,

  /**
   * Deletes all history states from the History palette.
   */
  HISTORYCACHES = 2,

  /**
   * Clears the undo cache.
   */
  UNDOCACHES = 1,
}

/**
 * The point around which to transform the object.
 */
declare enum AnchorPosition {
  /**
   * The middle point of the bottom of the object.
   */
  BOTTOMCENTER = 8,

  /**
   * The bottom left corner of the object.
   */
  BOTTOMLEFT = 7,

  /**
   * The bottom right corner of the object.
   */
  BOTTOMRIGHT = 9,

  /**
   * The center of the object.
   */
  MIDDLECENTER = 5,

  /**
   * The middle point on the left side of the object.
   */
  MIDDLELEFT = 4,

  /**
   * The middle point on the right side of the object.
   */
  MIDDLERIGHT = 6,

  /**
   * The middle point on the top of the object.
   */
  TOPCENTER = 2,

  /**
   * The top left corner of the object.
   */
  TOPLEFT = 1,

  /**
   * The top right corner of the object.
   */
  TOPRIGHT = 3,
}

/**
 * The method to use to resample the image.
 */
declare enum ResampleMethod {
  /**
   *
   */
  AUTOMATIC = 8,

  /**
   * Uses a weighted average to determine pixel color, which usually yields better results than the simple averageing method of downsampling.
   * The slowest but most precise method, resulting in the smoothest gradations.
   */
  BICUBIC = 4,

  /**
   *
   */
  BICUBICAUTOMATIC = 7,

  /**
   * A good method for reducing the size of an image based on Bicubic interpolation with enhanced sharpening. Maintains the detail in a resampled image.
   */
  BICUBICSHARPER = 5,

  /**
   * A good method for enlarging images based on Bicubic interpolation but designed to produce smoother results.
   */
  BICUBICSMOOTHER = 6,

  /**
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution. Same as average downsampling.
   */
  BILINEAR = 3,

  /**
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color. Same as subsampling.
   * Significantly reduces the conversion time compared with downsampling but results in images that are less smooth and continuous.
   */
  NEARESTNEIGHBOR = 2,

  /**
   * Does not resample.
   */
  NONE = 1,

  /**
   *
   */
  PRESERVEDETAILS = 9,
}

/**
 * The operating system.
 */
declare enum OperatingSystem {
  /**
   * Mac OS/2 operating system.
   */
  OS2 = 1,

  /**
   * Windows operating system.
   */
  WINDOWS = 2,
}

/**
 * The colors whose inclusion to force in the color table.
 */
declare enum ForcedColors {
  /**
   * Forces pure black and white.
   */
  BLACKWHITE = 2,

  /**
   * No forced colors.
   */
  NONE = 1,

  /**
   * Forces red, green, blue, cyan, magenta, yellow, black, and white.
   */
  PRIMARIES = 3,

  /**
   * Forces the 216 web-safe colors.
   */
  WEB = 4,
}

/**
 * The palette type for converting an image to indexed color.
 */
declare enum PaletteType {
  /**
   * The palette uses the exact colors appearing in the RGB image; available only if the image uses 256 or fewer colors.
   * Because the image's palette contains all colors in the image, there is no dithering.
   */
  EXACT = 1,

  /**
   * Creates a palette by sampling the colors from the spectrum appearing most commonly in the image.
   * For example, an RGB image with only the colors green and blue produces a palette made primarily of greens and blues.
   */
  LOCALADAPTIVE = 8,

  /**
   * Creates a custom palette by giving priority to colors for in the image which the human eye has greater sensitivity.
   */
  LOCALPERCEPTUAL = 6,

  /**
   * Creates a color table similar to the Perceptual color table, but favoring broad areas of color in the image and the preservation of web colors.
   * Usually produces images with the greatest color integrity.
   */
  LOCALSELECTIVE = 7,

  /**
   * The Mac OS default 8-bit palette, whch is based on a uniform sampling of RGB colors.
   */
  MACOSPALETTE = 2,

  /**
   * Creates a palette by sampling the colors from the spectrum appearing most commonly in a group of open images that share the same color palette.
   */
  MASTERADAPTIVE = 11,

  /**
   * Creates a custom palette by giving priority to colors in a group of open images with the same color palette for which the human eye has greater sensitivity.
   */
  MASTERPERCEPTUAL = 9,

  /**
   * Creates a color table similar to the Master Perceptual color table, but favoring broad areas of color and the preservation of web colors.
   */
  MASTERSELECTIVE = 10,

  /**
   * Uses the custom palette from the previous conversion, making it easy to convert several images with the same custom palette.
   */
  PREVIOUSPALETTE = 12,

  /**
   * Creates a palette by uniformly sampling colors from the RGB color cube.
   * For example, if Photoshop takes six evenly spaced color levels each of red, green, and blue, the combination produces a uniform palette of 216 colors (6 cubed = 6 x 6 x 6 = 216). The total number of colors displayed in an image corresponds to the nearest perfect cube (8, 27, 64, 125, or 216) that is less than the value in the Colors text box.
   */
  UNIFORM = 5,

  /**
   * The 216-color palette that web browsers, regardless of platform, use to display images on a monitor limited to 256 colors.
   * A subset of the Mac OS 8-bit palette. Use this option to avoid browser dither when viewing images on a monitor display limited to 256 colors.
   */
  WEBPALETTE = 4,

  /**
   * The Windows system's default 8-bit palette, whch is based on a uniform sampling of RGB colors.
   */
  WINDOWSPALETTE = 3,
}

/**
 * The type of dither.
 */
declare enum Dither {
  /**
   * Diffuses dither effects in random patterns across adjacent pixels.
   */
  DIFFUSION = 2,

  /**
   * Applies a random pattern but without diffusing the pattern across adjacent pixels; prevents the appearance of seams.
   */
  NOISE = 4,

  /**
   * No dither is used.
   */
  NONE = 1,

  /**
   * Applies a halftone-like square pattern.
   */
  PATTERN = 3,
}

/**
 * The type of image to use as a low-resolution preview in the destination application.
 */
declare enum Preview {
  /**
   * 8-bit TIFF.
   */
  EIGHTBITTIFF = 3,

  /**
   * 8-bit.
   */
  MACOSEIGHTBIT = 5,

  /**
   * JPEG.
   */
  MACOSJPEG = 6,

  /**
   * Monochrome.
   */
  MACOSMONOCHROME = 4,

  /**
   * Monochrome TIFF.
   */
  MONOCHROMETIFF = 2,

  /**
   * Does not use a preview.
   */
  NONE = 1,
}

/**
 * The encoding to use when saving documents.
 */
declare enum SaveEncoding {
  /**
   * ASCII.
   */
  ASCII = 3,

  /**
   * Binary.
   */
  BINARY = 1,

  /**
   * High quality JPEG encoding.
   */
  JPEGHIGH = 5,

  /**
   * Low quality JPEG encoding (high amount of compression).
   */
  JPEGLOW = 2,

  /**
   * Maximum quality JPEG encoding (very little compression).
   */
  JPEGMAXIMUM = 6,

  /**
   * Medium quality JPEG encoding (medium compression).
   */
  JPEGMEDIUM = 4,
}

/**
 * The options for saving a JPEG file.
 */
declare enum FormatOptions {
  /**
   * Baseline (Optimized). Optimized color and a slightly reduced file size.
   */
  OPTIMIZEDBASELINE = 2,

  /**
   * Displays a series of increasingly detailed scans as the image downloads.
   */
  PROGRESSIVE = 3,

  /**
   * Baseline (Standard). Recognized by most web browsers.
   */
  STANDARDBASELINE = 1,
}

/**
 * The type of compression to use when saving a document in PDF format.
 */
declare enum PDFEncoding {
  /**
   * JPEG compression.
   */
  JPEG = 2,

  /**
   * JPEG2000 compression with high image quality.
   */
  JPEG2000HIGH = 9,

  /**
   * JPEG2000 lossless compression.
   */
  JPEG2000LOSSLESS = 14,

  /**
   * JPEG2000 compression with low image quality.
   */
  JPEG2000LOW = 13,

  /**
   * JPEG2000 compression with medium image quality.
   */
  JPEG2000MED = 11,

  /**
   * JPEG2000 compression with medium high image quality.
   */
  JPEG2000MEDHIGH = 10,

  /**
   * JPEG2000 compression with medium low image quality.
   */
  JPEG2000MEDLOW = 12,

  /**
   * JPEG compression with high image quality.
   */
  JPEGHIGH = 4,

  /**
   * JPEG compression with low image quality.
   */
  JPEGLOW = 8,

  /**
   * JPEG compression with medium image quality.
   */
  JPEGMED = 6,

  /**
   * JPEG compression with medium high image quality.
   */
  JPEGMEDHIGH = 5,

  /**
   * JPEG compression with medium low image quality.
   */
  JPEGMEDLOW = 7,

  /**
   * No encoding.
   */
  NONE = 0,

  /**
   * Zip compression.
   */
  PDFZIP = 1,

  /**
   * Zip compression with 4-bit image quality.
   */
  PDFZIP4BIT = 3,
}

/**
 * The PDF/X standard with which the document complies.
 * PDF/X compliant files must contain information describing the printing condition for which they are prepared.
 */
declare enum PDFStandard {
  /**
   * The document does not use the PDF/X standard.
   */
  NONE = 0,

  /**
   * PDF/X-1a standard, which requires all fonts to be embedded, the appropriate PDF bounding boxes to be specified, and color to appear as CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
   */
  PDFX1A2001 = 1,

  /**
   * PDF/X-1a standard, which requires all fonts to be embedded, the appropriate PDF bounding boxes to be specified, and color to appear as CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
   */
  PDFX1A2003 = 2,

  /**
   * PDF/X-3 standard, which requires all fonts to be embedded and the appropriate PDF bounding boxes to be specified, and for color allows either the use of color management and device-independent color (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray) or CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
   */
  PDFX32002 = 3,

  /**
   * PDF/X-3 standard, which requires all fonts to be embedded and the appropriate PDF bounding boxes to be specified, and for color allows either the use of color management and device-independent color (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray) or CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
   */
  PDFX32003 = 4,

  /**
   * PDF/X-4 standard, which requires all fonts to be embedded and the appropriate PDF bounding boxes to be specified, and for color allows either the use of color management and device-independent color (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray) or CMYK, spot colors, or both; can be opened in Acrobat 8.0 and Acrobat Reader 8.0 and later.
   */
  PDFX42008 = 5,
}

/**
 * The PDF version with which to make the document compatible.
 */
declare enum PDFCompatibility {
  /**
   * PDF 1.3 (Acrobat 4 or higher).
   */
  PDF13 = 1,

  /**
   * PDF 1.4 (Acrobat 5 or higher).
   */
  PDF14 = 2,

  /**
   * PDF 1.5 (Acrobat 6 or higher).
   */
  PDF15 = 3,

  /**
   * PDF 1.6 (Acrobat 7 or higher)
   */
  PDF16 = 4,

  /**
   * PDF 1.7 (Acrobat 9 or higher)
   */
  PDF17 = 5,
}

/**
 * Downsampling options when saving as PDF.
 */
declare enum PDFResample {
  /**
   * Does not downsample.
   */
  NONE = 0,

  /**
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution.
   */
  PDFAVERAGE = 1,

  /**
   * Uses a weighted average to determine pixel color, which usually yields better results than the simple averaging method of downsampling. The slowest but most precise method, resulting in the smoothest gradations.
   */
  PDFBICUBIC = 3,

  /**
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color; significantly reduces conversion time but results in images that are less smooth and continuous.
   */
  PDFSUBSAMPLE = 2,
}

/**
 * The compression type to use whan saving as PICT.
 */
declare enum PICTCompression {
  /**
   * High quality JPEG encoding.
   */
  JPEGHIGHPICT = 5,

  /**
   * Low quality JPEG encoding (high amount of compression).
   */
  JPEGLOWPICT = 2,

  /**
   * Maximum quality JPEG encoding (very little compression).
   */
  JPEGMAXIMUMPICT = 6,

  /**
   * Medium quality JPEG encoding (medium amount of compression).
   */
  JPEGMEDIUMPICT = 4,

  /**
   * No compression.
   */
  NONE = 1,
}

/**
 * The formatting for the filename extension.
 */
declare enum Extension {
  /**
   * The extension is in lowercase letters.
   */
  LOWERCASE = 2,

  /**
   * Does not use an extension.
   */
  NONE = 1,

  /**
   * The extension is in uppercase letters.
   */
  UPPERCASE = 3,
}

/**
 * The encoding to use when saving to TIFF format.
 */
declare enum TIFFEncoding {
  /**
   * JPEG compression, which is lossy and recommended for continuous-tone images, such as photographs.
   */
  JPEG = 3,

  /**
   * No compression.
   */
  NONE = 1,

  /**
   * LZW compression, which is lossless and most useful for images with large areas of single color.
   */
  TIFFLZW = 2,

  /**
   * Zip compression, which is lossless and most effective for images that contain large areas of single color.
   */
  TIFFZIP = 4,
}

/**
 * The layer compression type.
 */
declare enum LayerCompression {
  /**
   * Run Length Encoding, which is lossless.
   */
  RLE = 1,

  /**
   * Zip compression, which is lossless and most effective for images that contain large areas of single color.
   */
  ZIP = 2,
}

/**
 * The platform-specific order in which bytes will be read.
 */
declare enum ByteOrder {
  /**
   * IBM PC.
   */
  IBM = 1,

  /**
   * Mac OS.
   */
  MACOS = 2,
}

/**
 * The DCS format.
 */
declare enum DCSType {
  /**
   * Creates a color composite file in addition to DCS files.
   */
  COLORCOMPOSITE = 3,

  /**
   * Creates a grayscale composite file in addition to DCS files.
   */
  GRAYSCALECOMPOSITE = 2,

  /**
   * Does not create a composite file.
   */
  NOCOMPOSITE = 1,
}

/**
 * The type of pixels to trim around an image.
 */
declare enum TrimType {
  /**
   * Removes from the image an area the color of the lower right pixel.
   */
  BOTTOMRIGHT = 9,

  /**
   * Removes from the image an area the color of the upper left pixel.
   */
  TOPLEFT = 1,

  /**
   * Trims away transparency at the edges of the image, leaving the smallest image containing nontransparent pixels.
   */
  TRANSPARENT = 0,
}

/**
 * The color picker to use.
 */
declare enum ColorPicker {
  /**
   * The Adobe Color Picker.
   */
  ADOBE = 1,

  /**
   * The built-in Apple color picker.
   */
  APPLE = 2,

  /**
   * An installed plug-in color picker.
   */
  PLUGIN = 4,

  /**
   * The built-in Windows color picker.
   */
  WINDOWS = 3,
}

/**
 * The type of object(s) to reset to default settings.
 */
declare enum ResetTarget {
  /**
   * Tools.
   */
  ALLTOOLS = 2,

  /**
   * Warning dialogs.
   */
  ALLWARNINGS = 1,

  /**
   * All targets.
   */
  EVERYTHING = 3,
}

/**
 * The application's behavior regarding image previews and file extensions when a save method is called.
 */
declare enum SaveBehavior {
  /**
   * Always save the item with the file.
   */
  ALWAYSSAVE = 2,

  /**
   * Prompt the user whether to save the item with the file.
   */
  ASKWHENSAVING = 3,

  /**
   * Never save the item with the file.
   */
  NEVERSAVE = 1,
}

/**
 * The pointer for the following tools: Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice, Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen, Measure, and Color Sampler.
 */
declare enum PaintingCursors {
  /**
   * Displays cursors as brush shapes representing the size of the current brush. Valid only for painting cursors.
   * Brush size cursors may not appear for very large brushes.
   */
  BRUSHSIZE = 3,

  /**
   * Displays pointers as cross hairs.
   */
  PRECISE = 2,

  /**
   * Displays pointers as tool icons.
   */
  STANDARD = 1,
}

/**
 * The pointer for the following tools: Eraser, Pencil, Paintbrush, Healing Brush, Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
 */
declare enum OtherPaintingCursors {
  /**
   * Displays pointers as cross hairs.
   */
  PRECISEOTHER = 2,

  /**
   * Displays pointers as tool icons.
   */
  STANDARDOTHER = 1,
}

/**
 * The size of grid squares.
 */
declare enum GridSize {
  /**
   * Large grid squares.
   */
  LARGE = 4,

  /**
   * Medium grid squares.
   */
  MEDIUM = 3,

  /**
   * No grid is displayed.
   */
  NONE = 1,

  /**
   * Small grid squares.
   */
  SMALL = 2,
}

/**
 * The measurement unit for ruler increments.
 */
declare enum Units {
  /**
   * Centimeters.
   */
  CM = 3,

  /**
   * Inches.
   */
  INCHES = 2,

  /**
   * Millimeters.
   */
  MM = 4,

  /**
   * Percent.
   */
  PERCENT = 7,

  /**
   * Picas.
   */
  PICAS = 6,

  /**
   * Pixels.
   */
  PIXELS = 1,

  /**
   * Points.
   */
  POINTS = 5,
}

/**
 * The measurement unit for type.
 */
declare enum TypeUnits {
  /**
   * Millimeters.
   */
  MM = 4,

  /**
   * Pixels.
   */
  PIXELS = 1,

  /**
   * Points.
   */
  POINTS = 5,
}

/**
 * The point type.
 */
declare enum PointType {
  /**
   * 72 points per inch.
   */
  POSTSCRIPT = 1,

  /**
   * 72.27 points per inch.
   */
  TRADITIONAL = 2,
}

/**
 * The line style for nonprinting grids displayed over images.
 */
declare enum GridLineStyle {
  /**
   * Dashed.
   */
  DASHED = 2,

  /**
   * Dotted.
   */
  DOTTED = 3,

  /**
   * Solid.
   */
  SOLID = 1,
}

/**
 * The line style for nonprinting guides displayed over images.
 */
declare enum GuideLineStyle {
  /**
   * Dashed.
   */
  DASHED = 2,

  /**
   * Solid.
   */
  SOLID = 1,
}

/**
 * Controls how pixels in the image are blended.
 */
declare enum BlendMode {
  /**
   * Creates a result color with the luminance of the base color and the hue and saturation of the blend color. This preserves the gray levels in the image and is useful for coloring monochrome images and for tinting color images.
   */
  COLORBLEND = 22,

  /**
   * Looks at the color information in each channel and darkens the base color to reflect the blend color by increasing the contrast. Blending with white produces no change.
   */
  COLORBURN = 6,

  /**
   * Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing the contrast. Blending with black produces no change.
   */
  COLORDODGE = 10,

  /**
   * Looks at the color information in each channel and selects the base or blend color—whichever is darker—as the result color. Pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change.
   */
  DARKEN = 4,

  /**
   * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
   */
  DARKERCOLOR = 28,

  /**
   * Looks at the color information in each channel and subtracts either the blend color from the base color or the base color from the blend color, depending on which has the greater brightness value. Blending with white inverts the base color values; blending with black produces no change.
   */
  DIFFERENCE = 18,

  /**
   * Edits or paints each pixel to make it the result color. However, the result color is a random replacement of the pixels with the base color or the blend color, depending on the opacity at any pixel location.
   */
  DISSOLVE = 3,

  /**
   *
   */
  DIVIDE = 30,

  /**
   * Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base color values. Blending with black produces no change.
   */
  EXCLUSION = 19,

  /**
   * Multiplies or screens the colors, depending on the blend color. The effect is similar to shining a harsh spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened, as if it were screened. This is useful for adding highlights to an image. If the blend color is darker than 50% gray, the image is darkened, as if it were multiplied. This is useful for adding shadows to an image. Painting with pure black or white results in pure black or white.
   */
  HARDLIGHT = 14,

  /**
   * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
   */
  HARDMIX = 26,

  /**
   * Creates a result color with the luminance and saturation of the base color and the hue of the blend color.
   */
  HUE = 20,

  /**
   * Looks at the color information in each channel and selects the base or blend color—whichever is lighter—as the result color. Pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change.
   */
  LIGHTEN = 8,

  /**
   * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
   */
  LIGHTERCOLOR = 27,

  /**
   * Looks at the color information in each channel and darkens the base color to reflect the blend color by decreasing the brightness. Blending with white produces no change.
   */
  LINEARBURN = 7,

  /**
   * Looks at the color information in each channel and brightens the base color to reflect the blend color by increasing the brightness. Blending with black produces no change.
   */
  LINEARDODGE = 11,

  /**
   * Burns or dodges the colors by decreasing or increasing the brightness, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by increasing the brightness. If the blend color is darker than 50% gray, the image is darkened by decreasing the brightness.
   */
  LINEARLIGHT = 16,

  /**
   * Creates a result color with the hue and saturation of the base color and the luminance of the blend color. This mode creates an inverse effect from that of the Color mode.
   */
  LUMINOSITY = 23,

  /**
   * Looks at the color information in each channel and multiplies the base color by the blend color. The result color is always a darker color. Multiplying any color with black produces black. Multiplying any color with white leaves the color unchanged. When you’re painting with a color other than black or white, successive strokes with a painting tool produce progressively darker colors. The effect is similar to drawing on the image with multiple marking pens.
   */
  MULTIPLY = 5,

  /**
   * Edits or paints each pixel to make it the result color. (Called "Threshold" when you’re working with a bitmapped or indexed-color image.)
   */
  NORMAL = 2,

  /**
   * Multiplies or screens the colors, depending on the base color. Patterns or colors overlay the existing pixels while preserving the highlights and shadows of the base color. The base color is not replaced but is mixed with the blend color to reflect the lightness or darkness of the original color.
   */
  OVERLAY = 12,

  /**
   * Allows any blend modes, advanced blending options, and opacity and fill values applied to layers within a set to affect layers below the set in the Layers palette.
   * Valid only for layer sets. To restrict blend modes of the layers within a set, change the layer set's blend mode to Normal.
   */
  PASSTHROUGH = 1,

  /**
   * Replaces the colors, depending on the blend color. If the blend color (light source) is lighter than 50% gray, pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. If the blend color is darker than 50% gray, pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. This is useful for adding special effects to an image.
   */
  PINLIGHT = 17,

  /**
   * Creates a result color with the luminance and hue of the base color and the saturation of the blend color. Painting with this mode in an area with no (0) saturation (gray) causes no change.
   */
  SATURATION = 21,

  /**
   * Looks at each channel’s color information and multiplies the inverse of the blend and base colors. The result color is always a lighter color. Screening with black leaves the color unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.
   */
  SCREEN = 9,

  /**
   * Darkens or lightens the colors, depending on the blend color. The effect is similar to shining a diffused spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened as if it were dodged. If the blend color is darker than 50% gray, the image is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area but does not result in pure black or white.
   */
  SOFTLIGHT = 13,

  /**
   *
   */
  SUBTRACT = 29,

  /**
   * Burns or dodges the colors by increasing or decreasing the contrast, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by decreasing the contrast. If the blend color is darker than 50% gray, the image is darkened by increasing the contrast.
   */
  VIVIDLIGHT = 15,
}

/**
 * The color blend mode type.
 */
declare enum ColorBlendMode {
  /**
   * Edits or paints only on the transparent part of a layer. Works only in layers in which transparent pixels locked = false and is analogous to painting on the back of transparent areas on a sheet of acetate.
   */
  BEHIND = 24,

  /**
   * Edits or paints each pixel and makes it transparent. Works only in layers in which transparent pixels locked = false.
   */
  CLEAR = 25,

  /**
   * Creates a result color with the luminance of the base color and the hue and saturation of the blend color. This preserves the gray levels in the image and is useful for coloring monochrome images and for tinting color images.
   */
  COLOR = 22,

  /**
   * Looks at the color information in each channel and darkens the base color to reflect the blend color by increasing the contrast. Blending with white produces no change.
   */
  COLORBURN = 6,

  /**
   * Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing the contrast. Blending with black produces no change.
   */
  COLORDODGE = 10,

  /**
   * Looks at the color information in each channel and selects the base or blend color—whichever is darker—as the result color. Pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change.
   */
  DARKEN = 4,

  /**
   *
   */
  DARKERCOLOR = 28,

  /**
   * Looks at the color information in each channel and subtracts either the blend color from the base color or the base color from the blend color, depending on which has the greater brightness value. Blending with white inverts the base color values; blending with black produces no change.
   */
  DIFFERENCE = 18,

  /**
   * Edits or paints each pixel to make it the result color, which is a random replacement of the pixels with the base color or the blend color, depending on the opacity at any pixel location.
   */
  DISSOLVE = 3,

  /**
   *
   */
  DIVIDE = 30,

  /**
   * Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base color values. Blending with black produces no change.
   */
  EXCLUSION = 19,

  /**
   * Multiplies or screens the colors, depending on the blend color. The effect is similar to shining a harsh spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened, as if it were screened. This is useful for adding highlights to an image. If the blend color is darker than 50% gray, the image is darkened, as if it were multiplied. This is useful for adding shadows to an image. Painting with pure black or white results in pure black or white.
   */
  HARDLIGHT = 14,

  /**
   * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
   */
  HARDMIX = 26,

  /**
   * Creates a result color with the luminance and saturation of the base color and the hue of the blend color.
   */
  HUE = 20,

  /**
   * Looks at the color information in each channel and selects the base or blend color—whichever is lighter—as the result color. Pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change.
   */
  LIGHTEN = 8,

  /**
   *
   */
  LIGHTERCOLOR = 27,

  /**
   * Looks at the color information in each channel and darkens the base color to reflect the blend color by decreasing the brightness. Blending with white produces no change.
   */
  LINEARBURN = 7,

  /**
   * Looks at the color information in each channel and brightens the base color to reflect the blend color by increasing the brightness. Blending with black produces no change.
   */
  LINEARDODGE = 11,

  /**
   * Burns or dodges the colors by decreasing or increasing the brightness, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by increasing the brightness. If the blend color is darker than 50% gray, the image is darkened by decreasing the brightness.
   */
  LINEARLIGHT = 16,

  /**
   * Creates a result color with the hue and saturation of the base color and the luminance of the blend color. This mode creates an inverse effect from that of the Color mode.
   */
  LUMINOSITY = 23,

  /**
   * Looks at the color information in each channel and multiplies the base color by the blend color. The result color is always a darker color. Multiplying any color with black produces black. Multiplying any color with white leaves the color unchanged. When you’re painting with a color other than black or white, successive strokes with a painting tool produce progressively darker colors. The effect is similar to drawing on the image with multiple marking pens.
   */
  MULTIPLY = 5,

  /**
   * Edits or paints each pixel to make it the result color. (Called "Threshold" when you’re working with a bitmapped or indexed-color image.)
   */
  NORMAL = 2,

  /**
   * Multiplies or screens the colors, depending on the base color. Patterns or colors overlay the existing pixels while preserving the highlights and shadows of the base color. The base color is not replaced but is mixed with the blend color to reflect the lightness or darkness of the original color.
   */
  OVERLAY = 12,

  /**
   * Replaces the colors, depending on the blend color. If the blend color (light source) is lighter than 50% gray, pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. If the blend color is darker than 50% gray, pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. This is useful for adding special effects to an image.
   */
  PINLIGHT = 17,

  /**
   * Creates a result color with the luminance and hue of the base color and the saturation of the blend color. Painting with this mode in an area with no (0) saturation (gray) causes no change.
   */
  SATURATION = 21,

  /**
   * Looks at each channel’s color information and multiplies the inverse of the blend and base colors. The result color is always a lighter color. Screening with black leaves the color unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.
   */
  SCREEN = 9,

  /**
   * Darkens or lightens the colors, depending on the blend color. The effect is similar to shining a diffused spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened as if it were dodged. If the blend color is darker than 50% gray, the image is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area but does not result in pure black or white.
   */
  SOFTLIGHT = 13,

  /**
   *
   */
  SUBTRACT = 29,

  /**
   * Burns or dodges the colors by increasing or decreasing the contrast, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by decreasing the contrast. If the blend color is darker than 50% gray, the image is darkened by increasing the contrast.
   */
  VIVIDLIGHT = 15,
}

/**
 * The type of the layer content to rasterize.
 */
declare enum RasterizeType {
  /**
   * Rasterizes all vector data on the layer.
   */
  ENTIRELAYER = 5,

  /**
   * Rasterizes the fill of a shape layer, leaving the vector mask.
   */
  FILLCONTENT = 3,

  /**
   * Rasterizes the vector mask of a shape layer, turning it into a layer mask.
   */
  LAYERCLIPPINGPATH = 4,

  /**
   * Rasterizes the selected layers.
   */
  LINKEDLAYERS = 6,

  /**
   * Rasterizes a shape layer.
   */
  SHAPE = 2,

  /**
   * Rasterizes the type on a type layer. Doesn't rasterize any other vector data on the layer.
   */
  TEXTCONTENTS = 1,
}

/**
 * The placement of paragraph text within the bounding box.
 */
declare enum Justification {
  /**
   * Text is centered on each line.
   */
  CENTER = 2,

  /**
   * Justifies all lines except the last, which is center-aligned.
   */
  CENTERJUSTIFIED = 5,

  /**
   * Justifies all lines including the last, which is force-justified.
   */
  FULLYJUSTIFIED = 7,

  /**
   * Aligns the left edges, leaving the right edge ragged.
   */
  LEFT = 1,

  /**
   * Justifies all lines except the last, which is left-aligned.
   */
  LEFTJUSTIFIED = 4,

  /**
   * Aligns the right edges, leaving the left edge ragged.
   */
  RIGHT = 3,

  /**
   * Justifies all lines except the last, which is right-aligned.
   */
  RIGHTJUSTIFIED = 6,
}

/**
 * The method to use to smooth edges by softening the color transition between edge pixels and background pixels.
 */
declare enum AntiAlias {
  /**
   * Makes type appear somewhat sharp.
   */
  CRISP = 3,

  /**
   * Does not use anti-aliasing.
   */
  NONE = 1,

  /**
   * Makes type appear its sharpest.
   */
  SHARP = 2,

  /**
   * Makes type appear smoother.
   */
  SMOOTH = 5,

  /**
   * Makes type appear heavier.
   */
  STRONG = 4,
}

/**
 * The capitalization to use.
 */
declare enum Case {
  /**
   * Uses all uppercase letters.
   */
  ALLCAPS = 2,

  /**
   * Uses uppercase and lowercase letters.
   */
  NORMAL = 1,

  /**
   * Uses small caps for lowercase letters.
   */
  SMALLCAPS = 3,
}

/**
 * The language to use.
 */
declare enum Language {
  /**
   * Brazillian Portuguese.
   */
  BRAZILLIANPORTUGUESE = 13,

  /**
   * Canadian French.
   */
  CANADIANFRENCH = 4,

  /**
   * Danish.
   */
  DANISH = 17,

  /**
   * Dutch.
   */
  DUTCH = 16,

  /**
   * British English.
   */
  ENGLISHUK = 2,

  /**
   * American English.
   */
  ENGLISHUSA = 1,

  /**
   * Finnish.
   */
  FINNISH = 5,

  /**
   * French.
   */
  FRENCH = 3,

  /**
   * German.
   */
  GERMAN = 6,

  /**
   * Italian.
   */
  ITALIAN = 9,

  /**
   * Norwegian.
   */
  NORWEGIAN = 10,

  /**
   * Nynorsk Norwegian.
   */
  NYNORSKNORWEGIAN = 11,

  /**
   * Old German.
   */
  OLDGERMAN = 7,

  /**
   * Portuguese.
   */
  PORTUGUESE = 12,

  /**
   * Spanish.
   */
  SPANISH = 14,

  /**
   * Swedish.
   */
  SWEDISH = 15,

  /**
   * Swiss German.
   */
  SWISSGERMAN = 8,
}

/**
 * The type of text.
 */
declare enum TextType {
  /**
   * Text that wraps within a bounding box.
   */
  PARAGRAPHTEXT = 2,

  /**
   * Text that does not wrap.
   */
  POINTTEXT = 1,
}

/**
 * The warp style for text.
 */
declare enum WarpStyle {
  /**
   * The type is warped in the shape of an arc.
   */
  ARC = 2,

  /**
   * Text is warped in the form of an arch.
   */
  ARCH = 5,

  /**
   * Warp is heavier on the lower or left edge of the text than on the upper or right edge.
   */
  ARCLOWER = 3,

  /**
   * Warp is heavier on the upper or right edge of the text than on the lower or left edge.
   */
  ARCUPPER = 4,

  /**
   * Text is warped outward on both the upper and lower or right and left edges.
   */
  BULGE = 6,

  /**
   * Text is warped in the shape of a fish.
   */
  FISH = 11,

  /**
   * Text bulges in the middle and is squeezed on the edges as if viewed through a fisheye lens.
   */
  FISHEYE = 13,

  /**
   * Text is warped in the shape of a waving flag.
   */
  FLAG = 9,

  /**
   * Text is inflated.
   */
  INFLATE = 14,

  /**
   * No warp.
   */
  NONE = 1,

  /**
   * Text is warped in an undulating, rising pattern.
   */
  RISE = 12,

  /**
   * Text is warped downward or to the right in the shape of a fan-like seashell.
   */
  SHELLLOWER = 7,

  /**
   * Text is warped upward or to the left in the shape of a fan-like seashell.
   */
  SHELLUPPER = 8,

  /**
   * Text is squeezed.
   */
  SQUEEZE = 15,

  /**
   * Text is twisted.
   */
  TWIST = 16,

  /**
   * Text is warped in the shape of a wave.
   */
  WAVE = 10,
}

/**
 * The text composer.
 */
declare enum TextComposer {
  /**
   * Considers a network of break points for a range of lines and thus optimizes earlier lines in the paragraph to eliminate especially unattractive breaks later on. Results in more even spacing and fewer hyphens.
   * The Adobe Every-line composer approaches composition by identifying possible breakpoints, evaluating them, and assigning a weighted penalty based on these principles: Highest importance is given to evenness of letter and word spacing; Possible breakpoints are evaluated and penalized according to how much they deviate from optimal spacing; Hyphenation is avoided when possible; Breakpoints that require hyphenation are penalized more than those that create uneven spacing; Good breakpoints are preferred over bad breakpoints.
   */
  ADOBEEVERYLINE = 2,

  /**
   * Offers a traditional approach to composing type one line at a time. Useful if you prefer to have manual control over how lines break.
   * Uses the following principles when considering a breakpoint: Compressed or expanded word spacing is preferable to hyphenation; Hyphenation is preferable to compressed or expanded letter spacing; If spacing must be adjusted, compression is better than expansion.
   */
  ADOBESINGLELINE = 1,
}

/**
 * The type of kerning to use for characters.
 */
declare enum AutoKernType {
  /**
   * Allows manual kerning.
   */
  MANUAL = 1,

  /**
   * Uses kern pairs, which contain information about the spacing of specific pairs of letters.
   */
  METRICS = 2,

  /**
   * Adjusts the spacing between adjacent characters based on their shapes.
   */
  OPTICAL = 3,
}

/**
 * The strikethrough style.
 */
declare enum StrikeThruType {
  /**
   * (For vertical type) The strikethrough is through the em box.
   */
  STRIKEBOX = 3,

  /**
   * (For vertical type) The strikethrough is through the height of the text.
   */
  STRIKEHEIGHT = 2,

  /**
   * No strikethrough.
   */
  STRIKEOFF = 1,
}

/**
 * The type of underline.
 */
declare enum UnderlineType {
  /**
   * (For vertical type) The underline is to the left of the text.
   */
  UNDERLINELEFT = 3,

  /**
   * No underline.
   */
  UNDERLINEOFF = 1,

  /**
   * (For vertical type) The underline is to the right of the text.
   */
  UNDERLINERIGHT = 2,
}

/**
 * The selection behavior when a selection already exists.
 */
declare enum SelectionType {
  /**
   * Remove the selection from the already selected area.
   */
  DIMINISH = 3,

  /**
   * Add the selection to an already selected area.
   */
  EXTEND = 2,

  /**
   * Make the selection only the area where the new selection intersects the already selected area.
   */
  INTERSECT = 4,

  /**
   * Replace the selected area.
   */
  REPLACE = 1,
}

/**
 * The export options to use.
 */
declare enum ExportType {
  /**
   * Exports Photoshop paths as Adobe Illustrator files.
   */
  ILLUSTRATORPATHS = 1,

  /**
   * Uses the save for web export options.
   */
  SAVEFORWEB = 2,
}

/**
 * The paths to export.
 */
declare enum IllustratorPathType {
  /**
   * Exports all paths.
   */
  ALLPATHS = 2,

  /**
   * Exports the document bounds.
   */
  DOCUMENTBOUNDS = 1,

  /**
   * Exports the specified path. To specify the path, see the path name property of the illustrator export options object.
   */
  NAMEDPATH = 3,
}

/**
 * The type of channel.
 */
declare enum ChannelType {
  /**
   * The channel related to the document color model.
   */
  COMPONENT = 1,

  /**
   * The apha channel where color indicates a masked area.
   */
  MASKEDAREA = 2,

  /**
   * The lpha channel where color indicates a selected area.
   */
  SELECTEDAREA = 3,

  /**
   * The alpha channel to store a spot color.
   */
  SPOTCOLOR = 4,
}

/**
 * The blur method to use.
 */
declare enum RadialBlurMethod {
  /**
   * Blurs along concentric circular lines at the specified degree of rotation.
   */
  SPIN = 1,

  /**
   * Blurs along radial lines, as if zooming into or out of the image.
   */
  ZOOM = 2,
}

/**
 * The radial blur quality.
 */
declare enum RadialBlurQuality {
  /**
   * Produces best results.
   */
  BEST = 3,

  /**
   * Produces fast but grainy results.
   */
  DRAFT = 1,

  /**
   * Produces good results.
   */
  GOOD = 2,
}

/**
 * The smart blur quality.
 */
declare enum SmartBlurQuality {
  /**
   * High quality.
   */
  HIGH = 3,

  /**
   * Low quality.
   */
  LOW = 1,

  /**
   * Medium quality.
   */
  MEDIUM = 2,
}

/**
 * The method to use for smart blurring.
 */
declare enum SmartBlurMode {
  /**
   * Blur is applied only to edges of color transitions.
   * Where significant contrast occurs, applies black-and-white edges.
   */
  EDGEONLY = 2,

  /**
   * Blur is applied to entire image.
   */
  NORMAL = 1,

  /**
   * Blur is applied only to edges of color transitions.
   * Where significant contrast occurs, applies white edges.
   */
  OVERLAYEDGE = 3,
}

/**
 * The type of texture or glass surface image to load for a texturizer or glass filter.
 */
declare enum TextureType {
  /**
   * The image appears as if viewed through glass blocks.
   */
  BLOCKS = 1,

  /**
   * The image appears as if painted on canvas.
   */
  CANVAS = 2,

  /**
   * Texture from an existing document.
   */
  FILE = 5,

  /**
   * The image appears as if frosted.
   */
  FROSTED = 3,

  /**
   * The image appears as if viewed through an array of tiny lenses.
   */
  TINYLENS = 4,
}

/**
 * The method of polar distortion to use.
 */
declare enum PolarConversionType {
  /**
   * The selection is converted from its polar to rectangular coordinates.
   */
  POLARTORECTANGULAR = 2,

  /**
   * The selection is converted from its rectangular to polar coordinates.
   */
  RECTANGULARTOPOLAR = 1,
}

/**
 * The size of undulations.
 */
declare enum RippleSize {
  /**
   * Large.
   */
  LARGE = 3,

  /**
   * Medium.
   */
  MEDIUM = 2,

  /**
   * Small.
   */
  SMALL = 1,
}

/**
 * The method to use to treat undistorted areas or areas left blank in an image to which a filter in the Distort category has been applied.
 */
declare enum UndefinedAreas {
  /**
   * Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors.
   */
  REPEATEDGEPIXELS = 2,

  /**
   * Fills the undefined space with content from the opposite edge of the image.
   */
  WRAPAROUND = 1,
}

/**
 * The method to use to fill the empty space left by offsetting a an image or selection.
 */
declare enum OffsetUndefinedAreas {
  /**
   * Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors.
   */
  REPEATEDGEPIXELS = 3,

  /**
   * For background layers, sets pixels to the background layer color. For nonbackground layers, sets the pixels to transparent.
   */
  SETTOBACKGROUND = 1,

  /**
   * Fills the undefined space with content from the opposite edge of the image.
   */
  WRAPAROUND = 2,
}

/**
 * The curve (or stretch shape) to use for the distortion.
 */
declare enum SpherizeMode {
  /**
   * Distorts the image as if it is wrapped around a horizontal cylinder.
   */
  HORIZONTAL = 2,

  /**
   * Distorts the image as if it is wrapped around a sphere.
   */
  NORMAL = 1,

  /**
   * Distorts the image as if it is wrapped around a vertical cylinder.
   */
  VERTICAL = 3,
}

/**
 * Describes how the displacement map fits the image if the image is not the same size as the map.
 */
declare enum DisplacementMapType {
  /**
   * The map is resized.
   */
  STRETCHTOFIT = 1,

  /**
   * The selection is filled by repeating the map in a pattern.
   */
  TILE = 2,
}

/**
 * The type of wave.
 */
declare enum WaveType {
  /**
   * Rolling.
   */
  SINE = 1,

  /**
   * Square.
   */
  SQUARE = 3,

  /**
   * Triangular.
   */
  TRIANGULAR = 2,
}

/**
 * The method of zigzagging.
 */
declare enum ZigZagType {
  /**
   * Pixels are rotated around the center of the selection.
   */
  AROUNDCENTER = 1,

  /**
   * Pixels are displaced toward or away from the center of the selection.
   */
  OUTFROMCENTER = 2,

  /**
   * Pixels are displaced to the upper left or lower right.
   */
  PONDRIPPLES = 3,
}

/**
 * The distribution method to use when applying an Add Noise filter.
 */
declare enum NoiseDistribution {
  /**
   * Distributes color values of noise along a bell-shaped curve, creating a speckled effect.
   */
  GAUSSIAN = 2,

  /**
   * Distributes color values of noise using random numbers between 0 and plus or minus the specified value, creating a subtle effect.
   */
  UNIFORM = 1,
}

/**
 * The type of lens.
 */
declare enum LensType {
  /**
   * Movie Prime.
   */
  MOVIEPRIME = 5,

  /**
   * 105mm Prime.
   */
  PRIME105 = 3,

  /**
   * 35mm Prime.
   */
  PRIME35 = 2,

  /**
   * 50-300mm Zoom.
   */
  ZOOMLENS = 1,
}

/**
 * The type of fields to eliminate.
 */
declare enum EliminateFields {
  /**
   * Eliminate even interlaced lines in a video image.
   */
  EVENFIELDS = 2,

  /**
   * Eliminate odd interlaced lines in a video image.
   */
  ODDFIELDS = 1,
}

/**
 * The method for replacing eliminated fields.
 */
declare enum CreateFields {
  /**
   * Duplicates existing pixels.
   */
  DUPLICATION = 1,

  /**
   * Assigns color values to any new pixels that Photoshop creates based on the color values of existing pixels in the image.
   */
  INTERPOLATION = 2,
}

/**
 * The pixel dimensions of the image.
 */
declare enum PhotoCDSize {
  /**
   * 1024x1536 image.
   */
  EXTRALARGE = 5,

  /**
   * 512x768 image.
   */
  LARGE = 4,

  /**
   * 2048x3072 image.
   */
  MAXIMUM = 6,

  /**
   * 256x384 image.
   */
  MEDIUM = 3,

  /**
   * 64x96 image.
   */
  MINIMUM = 1,

  /**
   * 128x192 image.
   */
  SMALL = 2,
}

/**
 * The number of bits per color channel.
 */
declare enum BitsPerChannelType {
  /**
   * 8 bits per channel.
   */
  EIGHT = 8,

  /**
   * 1 bit per channel.
   */
  ONE = 1,

  /**
   * 16 bits per channel.
   */
  SIXTEEN = 16,

  /**
   * 32 bits per channel.
   */
  THIRTYTWO = 32,
}

/**
 * The number of bits per pixel to use when compressing a PICT file.
 */
declare enum PICTBitsPerPixels {
  /**
   * 8 bits per pixel.
   */
  EIGHT = 8,

  /**
   * 4 bits per pixel.
   */
  FOUR = 4,

  /**
   * 16 bits per pixel.
   */
  SIXTEEN = 16,

  /**
   * 32 bits per pixel.
   */
  THIRTYTWO = 32,

  /**
   * 2 bits per pixel.
   */
  TWO = 2,
}

/**
 * The resolution to use when saving an image in Targa format.
 */
declare enum TargaBitsPerPixels {
  /**
   * 16 bits per pixel.
   */
  SIXTEEN = 16,

  /**
   * 32 bits per pixel.
   */
  THIRTYTWO = 32,

  /**
   * 24 bits per pixel.
   */
  TWENTYFOUR = 24,
}

/**
 * The value type of an object.
 */
declare enum DescValueType {
  /**
   * Alias.
   */
  ALIASTYPE = 11,

  /**
   * Boolean.
   */
  BOOLEANTYPE = 5,

  /**
   * Class.
   */
  CLASSTYPE = 10,

  /**
   * Double.
   */
  DOUBLETYPE = 2,

  /**
   * Enumeration.
   */
  ENUMERATEDTYPE = 8,

  /**
   * Integer.
   */
  INTEGERTYPE = 1,

  /**
   *
   */
  LARGEINTEGERTYPE = 13,

  /**
   * Action list.
   */
  LISTTYPE = 6,

  /**
   * Object.
   */
  OBJECTTYPE = 7,

  /**
   * Raw.
   */
  RAWTYPE = 12,

  /**
   * Reference.
   */
  REFERENCETYPE = 9,

  /**
   * String.
   */
  STRINGTYPE = 4,

  /**
   * Unit value of type double.
   */
  UNITDOUBLE = 3,
}

/**
 * The type of action reference object.
 */
declare enum ReferenceFormType {
  /**
   * Class.
   */
  CLASSTYPE = 7,

  /**
   * Enumerated.
   */
  ENUMERATED = 5,

  /**
   * Identifier.
   */
  IDENTIFIER = 3,

  /**
   * Index.
   */
  INDEX = 2,

  /**
   * Name.
   */
  NAME = 1,

  /**
   * Offset.
   */
  OFFSET = 4,

  /**
   * Property.
   */
  PROPERTY = 6,
}

/**
 * The number of bits per channel (also called pixel depth or color depth). The number selected indicates the exponent of 2. For example, a pixel with a bit-depth of EIGHT has 2-to-the-8th, or 256, possible color values.
 */
declare enum BMPDepthType {
  /**
   * A1 R5 G5 B5 advanced bit depth specification.
   */
  BMP_A1R5G5B5 = 61,

  /**
   * A4 R4 G4 B4 advanced bit depth specification.
   */
  BMP_A4R4G4B4 = 64,

  /**
   * A8 R8 G8 B8 advanced bit depth specification (same as normal 32 bit mode)
   */
  BMP_A8R8G8B8 = 67,

  /**
   * R5 G6 B5 advanced bit depth specification.
   */
  BMP_R5G6B5 = 62,

  /**
   * R8 G8 B8 advanced bit depth specification (same as normal 24 bit mode)
   */
  BMP_R8G8B8 = 65,

  /**
   * X1 R5 G5 B5 advanced bit depth specification (same as normal 16 bit mode)
   */
  BMP_X1R5G5B5 = 60,

  /**
   * X4 R4 G4 B4 advanced bit depth specification.
   */
  BMP_X4R4G4B4 = 63,

  /**
   * X8 R8 G8 B8 advanced bit depth specification.
   */
  BMP_X8R8G8B8 = 66,

  /**
   * 8 bits depth.
   */
  EIGHT = 8,

  /**
   * 4 bits depth.
   */
  FOUR = 4,

  /**
   * 1 bit depth.
   */
  ONE = 1,

  /**
   * 16 bits depth.
   */
  SIXTEEN = 16,

  /**
   * 32 bits depth.
   */
  THIRTYTWO = 32,

  /**
   * 24 bits depth.
   */
  TWENTYFOUR = 24,
}

/**
 * The copyright status of the document.
 */
declare enum CopyrightedType {
  /**
   * The document is copyrighted.
   */
  COPYRIGHTEDWORK = 1,

  /**
   * The document is in the public domain.
   */
  PUBLICDOMAIN = 2,

  /**
   * The copyright status is not indicated.
   */
  UNMARKED = 3,
}

/**
 * The quality of an image converted to bitmap mode.
 */
declare enum BitmapConversionType {
  /**
   * Simulates the effect of printing a grayscale image through a custom halftone screen. This method lets you apply a screen texture, such as a wood grain, to an image. To use this option, you must first define a pattern.
   */
  CUSTOMPATTERN = 5,

  /**
   * Applies a random pattern that is usually less noticeable than pattern dither. The dither effects are diffused across adjacent pixels. If you select this algorithm, specify a dither percentage to control the amount of dithering applied to the image.
   * May cause detectable seams to appear across slice boundaries. Linking slices diffuses the dither pattern across all linked slices, and eliminates the seams.
   */
  DIFFUSIONDITHER = 3,

  /**
   * 50% Threshold.
   */
  HALFTHRESHOLD = 1,

  /**
   * Lets you convert a grayscale image to simulated halftone dots.
   */
  HALFTONESCREEN = 4,

  /**
   * Applies a halftone-like square pattern to determine the value of pixels.
   */
  PATTERNDITHER = 2,
}

/**
 * The shape of the dots (ink deposits) in the halftone screen.
 */
declare enum BitmapHalfToneType {
  /**
   * Cross.
   */
  CROSS = 6,

  /**
   * Diamond.
   */
  DIAMOND = 2,

  /**
   * Ellipse.
   */
  ELLIPSE = 3,

  /**
   * Line.
   */
  LINE = 4,

  /**
   * Round.
   */
  ROUND = 1,

  /**
   * Square.
   */
  SQUARE = 5,
}

/**
 * The color to use for matting.
 */
declare enum MatteType {
  /**
   * The current background color.
   */
  BACKGROUND = 3,

  /**
   * Black.
   */
  BLACK = 5,

  /**
   * The current foreground color.
   */
  FOREGROUND = 2,

  /**
   * Gray.
   */
  NETSCAPE = 7,

  /**
   * None.
   */
  NONE = 1,

  /**
   * 50% gray.
   */
  SEMIGRAY = 6,

  /**
   * White.
   */
  WHITE = 4,
}

/**
 * Method to use for interpreting selective color adjustment specifications.
 */
declare enum AdjustmentReference {
  /**
   * A percentage of the whole.
   */
  ABSOLUTE = 2,

  /**
   * A percentage of the existing color amount.
   */
  RELATIVE = 1,
}

/**
 * The color profile to use.
 */
declare enum OpenDocumentMode {
  /**
   * CMYK.
   */
  CMYK = 3,

  /**
   * Grayscale.
   */
  GRAYSCALE = 1,

  /**
   * Lab.
   */
  LAB = 4,

  /**
   * RGB.
   */
  RGB = 2,
}

/**
 * The color profile to use.
 */
declare enum NewDocumentMode {
  /**
   * Bitmap.
   */
  BITMAP = 5,

  /**
   * CMYK.
   */
  CMYK = 3,

  /**
   * Grayscale.
   */
  GRAYSCALE = 1,

  /**
   * Lab.
   */
  LAB = 4,

  /**
   * RGB.
   */
  RGB = 2,
}

/**
 * Deprecated.
 */
declare enum PhotoCDColorSpace {
  /**
   * Lab with 16 bits per channel.
   */
  LAB16 = 4,

  /**
   * Lab with 8 bits per channel.
   */
  LAB8 = 3,

  /**
   * RGB with 16 bits per channel.
   */
  RGB16 = 2,

  /**
   * RGB with 8 bits per channel.
   */
  RGB8 = 1,
}

/**
 * The placement of path or selection boundary strokes.
 */
declare enum StrokeLocation {
  /**
   * The border is placed in the center of the the selection or layer boundaries.
   */
  CENTER = 2,

  /**
   * The border is placed inside the selection or layer boundaries.
   */
  INSIDE = 1,

  /**
   * The border is placed outside the selection or layer boundaries.
   */
  OUTSIDE = 3,
}

/**
 * Color models.
 */
declare enum ColorModel {
  /**
   * CMYK.
   */
  CMYK = 3,

  /**
   * Grayscale.
   */
  GRAYSCALE = 1,

  /**
   * HSB.
   */
  HSB = 5,

  /**
   * Lab.
   */
  LAB = 4,

  /**
   * The color model has not yet been assigned.
   */
  NONE = 50,

  /**
   * RGB.
   */
  RGB = 2,
}

/**
 * When should a JavaScript debugger be shown.
 */
declare enum JavaScriptExecutionMode {
  /**
   * Show the JavaScript debugger when the first line of the JavaScript executes.
   */
  BEFORERUNNING = 3,

  /**
   * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
   */
  NEVER = 1,

  /**
   * Show the JavaScript debugger if a runtime error occurs.
   */
  ONRUNTIMEERROR = 2,
}

/**
 * The color space for the source when printing.
 */
declare enum SourceSpaceType {
  /**
   * The document color space.
   */
  DOCUMENT = 1,

  /**
   * The proof color space.
   */
  PROOF = 2,
}

/**
 * The types of art layers.
 */
declare enum LayerKind {
  /**
   * Black and white layer.
   */
  BLACKANDWHITE = 22,

  /**
   * Brightness contrast adjustment layer.
   */
  BRIGHTNESSCONTRAST = 9,

  /**
   * Channel mixer adjustment layer.
   */
  CHANNELMIXER = 12,

  /**
   * Color balance adjustment layer.
   */
  COLORBALANCE = 8,

  /**
   * Color lookup layer.
   */
  COLORLOOKUP = 24,

  /**
   * Curves adjustment layer.
   */
  CURVES = 7,

  /**
   * Exposure layer.
   */
  EXPOSURE = 19,

  /**
   * Gradient fill.
   */
  GRADIENTFILL = 4,

  /**
   * Gradient map adjustment laye.
   */
  GRADIENTMAP = 13,

  /**
   * Hue saturation adjustment laye.
   */
  HUESATURATION = 10,

  /**
   * Invert adjustment layer.
   */
  INVERSION = 14,

  /**
   * 3D layer.
   */
  LAYER3D = 20,

  /**
   * Levels adjustment layer.
   */
  LEVELS = 6,

  /**
   * Normal.
   */
  NORMAL = 1,

  /**
   * Pattern fill.
   */
  PATTERNFILL = 5,

  /**
   * Photo filter layer.
   */
  PHOTOFILTER = 18,

  /**
   * Posterize adjustment layer.
   */
  POSTERIZE = 16,

  /**
   * Selective color adjustment layer.
   */
  SELECTIVECOLOR = 11,

  /**
   * Smart object layer.
   */
  SMARTOBJECT = 17,

  /**
   * Solid color.
   */
  SOLIDFILL = 3,

  /**
   * Text.
   */
  TEXT = 2,

  /**
   * Threshold adjustment layer.
   */
  THRESHOLD = 15,

  /**
   * Vibrance layer.
   */
  VIBRANCE = 23,

  /**
   * Video layer.
   */
  VIDEO = 21,
}

/**
 * PDF presentation transition types.
 */
declare enum TransitionType {
  /**
   * Images transition in horizontal stripes like Venetian blinds.
   */
  BLINDSHORIZONTAL = 1,

  /**
   * Images transition in vertical stripes.
   */
  BLINDSVERTICAL = 2,

  /**
   * Images transition using a shrinking box shape.
   */
  BOXIN = 4,

  /**
   * Images transition using an expanding box shape.
   */
  BOXOUT = 5,

  /**
   * One image dissolves into the next.
   */
  DISSOLVE = 3,

  /**
   * Images dissolve top to bottom.
   */
  GLITTERDOWN = 6,

  /**
   * Images dissolve left to right.
   */
  GLITTERRIGHT = 7,

  /**
   * Images dissolve top-left to bottom-right.
   */
  GLITTERRIGHTDOWN = 8,

  /**
   * Images change with no visible transition.
   */
  NONE = 9,

  /**
   * Images transition using random effects.
   */
  RANDOM = 10,

  /**
   * The new images roll in from the top and bottom of the screen.
   */
  SPLITHORIZONTALIN = 11,

  /**
   * The new image spreads from the middle of the screen to the top and bottom of the screen.
   */
  SPLITHORIZONTALOUT = 12,

  /**
   * The new image rolls in from the left and right edges of the screen.
   */
  SPLITVERTICALIN = 13,

  /**
   * The new image rolls out from the middle of the screen to the left and right edges of the screen.
   */
  SPLITVERTICALOUT = 14,

  /**
   * The new image rolls in from the top of the screen.
   */
  WIPEDOWN = 15,

  /**
   * The new image rolls in from the right side of the screen.
   */
  WIPELEFT = 16,

  /**
   * The new image rolls in from the left side of the screen.
   */
  WIPERIGHT = 17,

  /**
   * The new image rolls in from the bottom of the screen.
   */
  WIPEUP = 18,
}

/**
 * Fonts for web photo gallery text.
 */
declare enum GalleryFontType {
  /**
   * Arial font.
   */
  ARIAL = 1,

  /**
   * Courier New font.
   */
  COURIERNEW = 2,

  /**
   * Helvetica font.
   */
  HELVETICA = 3,

  /**
   * Times New Roman font.
   */
  TIMESNEWROMAN = 4,
}

/**
 * DEPRECATED. Constrain values for images.
 */
declare enum GalleryConstrainType {
  /**
   * Constrain both the height and the width of the image.
   */
  CONSTRAINBOTH = 3,

  /**
   * Constrain the height of the image.
   */
  CONSTRAINHEIGHT = 2,

  /**
   * Constrain width.
   */
  CONSTRAINWIDTH = 1,
}

/**
 * DEPRECATED. Web photo gallery thumb size types.
 */
declare enum GalleryThumbSizeType {
  /**
   * Custom thumbnail.
   */
  CUSTOM = 4,

  /**
   * Large thumbnail.
   */
  LARGE = 3,

  /**
   * Medium thumbnail.
   */
  MEDIUM = 2,

  /**
   * Small thumbnail.
   */
  SMALL = 1,
}

/**
 * DEPRECATED. Web photo gallery security types.
 */
declare enum GallerySecurityType {
  /**
   * Caption security.
   */
  CAPTION = 5,

  /**
   * Copyright security.
   */
  COPYRIGHT = 4,

  /**
   * Credit security.
   */
  CREDIT = 6,

  /**
   * Custom text security.
   */
  CUSTOMTEXT = 2,

  /**
   * Filename security.
   */
  FILENAME = 3,

  /**
   * No security.
   */
  NONE = 1,

  /**
   * Title security.
   */
  TITLE = 7,
}

/**
 * The function or meaning of text in a Picture Package.
 */
declare enum PicturePackageTextType {
  /**
   * The text is a caption.
   */
  CAPTION = 5,

  /**
   * The text is the copyright.
   */
  COPYRIGHT = 4,

  /**
   * The text is the credit.
   */
  CREDIT = 6,

  /**
   * The text is the filename.
   */
  FILENAME = 3,

  /**
   * No text.
   */
  NONE = 1,

  /**
   * The text is the origin.
   */
  ORIGIN = 7,

  /**
   * The text is user defined.
   */
  USER = 2,
}

/**
 * The color to use for text displayed over gallery images as an antitheft deterrent.
 */
declare enum GallerySecurityTextColorType {
  /**
   * Black text.
   */
  BLACK = 1,

  /**
   * Custom color.
   */
  CUSTOM = 3,

  /**
   * White text.
   */
  WHITE = 2,
}

/**
 * The position of the text displayed over gallery images as an antitheft deterrent.
 */
declare enum GallerySecurityTextPositionType {
  /**
   * Text is centered on each image.
   */
  CENTERED = 1,

  /**
   * Ltext is in the lower left corner of each image.
   */
  LOWERLEFT = 3,

  /**
   * Text is in the lower right corner of each image.
   */
  LOWERRIGHT = 5,

  /**
   * Text is in the upper left corner of each image.
   */
  UPPERLEFT = 2,

  /**
   * Text is in the upper right corner of each image.
   */
  UPPERRIGHT = 4,
}

/**
 * DEPRECATED. web photo gallery security text rotation types.
 */
declare enum GallerySecurityTextRotateType {
  /**
   * Rotate 45 degrees clock wise.
   */
  CLOCKWISE45 = 2,

  /**
   * Rotate 90 degrees clock wise.
   */
  CLOCKWISE90 = 3,

  /**
   * Rotate 45 degrees counter clock wise.
   */
  COUNTERCLOCKWISE45 = 4,

  /**
   * Rotate 90 degrees counter clock wise.
   */
  COUNTERCLOCKWISE90 = 5,

  /**
   * No rotate.
   */
  ZERO = 1,
}

/**
 * The permission state for queries.
 */
declare enum QueryStateType {
  /**
   * Always maximize compatibility.
   */
  ALWAYS = 1,

  /**
   * Always ask about maximize compatibility.
   */
  ASK = 2,

  /**
   * Never ask about maximize compatibility.
   */
  NEVER = 3,
}

/**
 * The location of history log data.
 */
declare enum SaveLogItemsType {
  /**
   * Save history log in a text file.
   */
  LOGFILE = 2,

  /**
   * Save history log in file metadata and a text file.
   */
  LOGFILEANDMETADATA = 3,

  /**
   * Save history log in file metadata.
   */
  METADATA = 1,
}

/**
 * The history log edit options.
 */
declare enum EditLogItemsType {
  /**
   * Save a concise history log.
   */
  CONCISE = 2,

  /**
   * Save a detailed history log.
   */
  DETAILED = 3,

  /**
   * Save a history for only for the session.
   */
  SESSIONONLY = 1,
}

/**
 * The type of path.
 */
declare enum PathKind {
  /**
   * Clipping path.
   */
  CLIPPINGPATH = 2,

  /**
   * Normal path.
   */
  NORMALPATH = 1,

  /**
   * Text mask path.
   */
  TEXTMASK = 5,

  /**
   * Vector mask path.
   */
  VECTORMASK = 4,

  /**
   * Workpath.
   */
  WORKPATH = 3,
}

/**
 * Specifies how to combine the shapes if the destination image already has a selection.
 */
declare enum ShapeOperation {
  /**
   * Adds the shapes.
   */
  SHAPEADD = 1,

  /**
   * The resulting shape is the area of intersection between the two shapes.
   */
  SHAPEINTERSECT = 3,

  /**
   * Subtracts the loaded shape from the selection is the destination image.
   */
  SHAPESUBTRACT = 4,

  /**
   * Replaces the shape in the destination image with the loaded selection.
   */
  SHAPEXOR = 2,
}

/**
 * The path point kind.
 */
declare enum PointKind {
  /**
   * The point must be a corner.
   */
  CORNERPOINT = 2,

  /**
   * The point can be a curve.
   */
  SMOOTHPOINT = 1,
}

/**
 * Tools for the stroke path command.
 */
declare enum ToolType {
  /**
   * Art history brush.
   */
  ARTHISTORYBRUSH = 9,

  /**
   * Background eraser.
   */
  BACKGROUNDERASER = 4,

  /**
   * Blur.
   */
  BLUR = 11,

  /**
   * Brush.
   */
  BRUSH = 2,

  /**
   * Burn.
   */
  BURN = 14,

  /**
   * Clone stamp.
   */
  CLONESTAMP = 5,

  /**
   * Color replacement tool.
   */
  COLORREPLACEMENTTOOL = 16,

  /**
   * Dodge.
   */
  DODGE = 13,

  /**
   * Eraser.
   */
  ERASER = 3,

  /**
   * Healing brush.
   */
  HEALINGBRUSH = 7,

  /**
   * History brush.
   */
  HISTORYBRUSH = 8,

  /**
   * Pattern stamp.
   */
  PATTERNSTAMP = 6,

  /**
   * Pencil.
   */
  PENCIL = 1,

  /**
   * Sharpen.
   */
  SHARPEN = 12,

  /**
   * Smudge.
   */
  SMUDGE = 10,

  /**
   * Sponge.
   */
  SPONGE = 15,
}

/**
 * The destination, if any, for batch-processed files.
 */
declare enum BatchDestinationType {
  /**
   * Outputs files to a folder.
   */
  FOLDER = 3,

  /**
   * Leaves all files open.
   */
  NODESTINATION = 1,

  /**
   * Saves changes and closes all files.
   */
  SAVEANDCLOSE = 2,
}

/**
 * File naming options for the batch command.
 */
declare enum FileNamingType {
  /**
   * Uses the date formatted as ddmm.
   */
  DDMM = 16,

  /**
   * Uses the date formatted as ddmmyy.
   */
  DDMMYY = 15,

  /**
   * Use the document name in lower case.
   */
  DOCUMENTNAMELOWER = 2,

  /**
   * Use the document name in mixed case.
   */
  DOCUMENTNAMEMIXED = 1,

  /**
   * Use the document name in UPPER case.
   */
  DOCUMENTNAMEUPPER = 3,

  /**
   * Use the extension of the file in lower case.
   */
  EXTENSIONLOWER = 17,

  /**
   * Use the extension of the file in UPPER case.
   */
  EXTENSIONUPPER = 18,

  /**
   * Uses the date formatted as mmdd.
   */
  MMDD = 11,

  /**
   * Uses the date formatted as mmddyy.
   */
  MMDDYY = 10,

  /**
   * Use letter serial number lower case (a, b, c, ...)
   */
  SERIALLETTERLOWER = 8,

  /**
   * Use letter serial number UPPER case (A, B, C, ...)
   */
  SERIALLETTERUPPER = 9,

  /**
   * Use a 1-digit serial number.
   */
  SERIALNUMBER1 = 4,

  /**
   * Use a 2-digit serial number.
   */
  SERIALNUMBER2 = 5,

  /**
   * Use a 3-digit serial number.
   */
  SERIALNUMBER3 = 6,

  /**
   * Use a 4-digit serial number.
   */
  SERIALNUMBER4 = 7,

  /**
   * Uses the date formatted as yyddmm.
   */
  YYDDMM = 14,

  /**
   * Uses the date formatted as yymmdd.
   */
  YYMMDD = 13,

  /**
   * Uses the date formatted as yyyymmdd.
   */
  YYYYMMDD = 12,
}

/**
 * Depth map source options.
 */
declare enum DepthMapSource {
  /**
   * Uses the image highlight for the depth map.
   */
  IMAGEHIGHLIGHT = 4,

  /**
   * Uses the layer mask for the depth map.
   */
  LAYERMASK = 3,

  /**
   * No depth map in use.
   */
  NONE = 1,

  /**
   * Uses the transparency channel for the depth map.
   */
  TRANSPARENCYCHANNEL = 2,
}

/**
 * Geometric options for shapes, such as the iris shape in the Lens Blur Filter.
 */
declare enum Geometry {
  /**
   * Heptagon.
   */
  HEPTAGON = 4,

  /**
   * Hexagon.
   */
  HEXAGON = 2,

  /**
   * Octagon.
   */
  OCTAGON = 5,

  /**
   * Pentagon.
   */
  PENTAGON = 1,

  /**
   * Square.
   */
  SQUARE = 3,

  /**
   * Triangle.
   */
  TRIANGLE = 0,
}

/**
 * The color reduction algorithm.
 */
declare enum ColorReductionType {
  /**
   * Samples color from the spectrum appearing most commonly in the image.
   */
  ADAPTIVE = 2,

  /**
   * Uses a set palette of colors.
   */
  BLACKWHITE = 5,

  /**
   * Uses a color palette that is created or modified by the user. If you open an existing GIF or PNG-8 file, it will have a custom color palette.
   */
  CUSTOM = 4,

  /**
   * Uses a set palette of colors.
   */
  GRAYSCALE = 6,

  /**
   * Uses a set palette of colors.
   */
  MACINTOSH = 7,

  /**
   * Gives priority to colors for which the human eye has greater sensitivity.
   */
  PERCEPTUAL = 0,

  /**
   * Uses the standard 216-color color table common to Windows and Mac OS 8-bit (256-color or web-safe palette); ensures that no browser dither is applied when the image is displayed using 8-bit color.
   */
  RESTRICTIVE = 3,

  /**
   * Gives priority to broad areas of color and the preservation of web colors; usually produces images with the greatest color integrity.
   */
  SELECTIVE = 1,

  /**
   * Uses a set palette of colors.
   */
  WINDOWS = 8,
}

/**
 * The default Camera RAW settings.
 */
declare enum CameraRAWSettingsType {
  /**
   * Use the settings of the camera.
   */
  CAMERA = 0,

  /**
   * Use the custom settings.
   */
  CUSTOM = 2,

  /**
   * Use the settings of the selected image.
   */
  SELECTEDIMAGE = 1,
}

/**
 * The lighting conditions (affects color balance).
 */
declare enum WhiteBalanceType {
  /**
   * Use the settings of the camera as shot.
   */
  ASSHOT = 0,

  /**
   * Automatically use the white balance settings.
   */
  AUTO = 1,

  /**
   * Use the settings as shot on a cloudy day.
   */
  CLOUDY = 3,

  /**
   * Use the custom settings for the shot parameters.
   */
  CUSTOM = 8,

  /**
   * Use the settings as shot in daylight.
   */
  DAYLIGHT = 2,

  /**
   * Use the settings as shot with a flash.
   */
  FLASH = 7,

  /**
   * Use the settings as shot with fluorescent lighting.
   */
  FLUORESCENT = 6,

  /**
   * Use the settings as shot in the shade.
   */
  SHADE = 4,

  /**
   * Use the settings as shot with tungsten lighting.
   */
  TUNGSTEN = 5,
}

/**
 * The type of color space.
 */
declare enum ColorSpaceType {
  /**
   * Use the Adobe RGB color space.
   */
  ADOBERGB = 0,

  /**
   * Use the ColorMatch RGB color space.
   */
  COLORMATCHRGB = 1,

  /**
   * Use the ProPhoto RGB color space.
   */
  PROPHOTORGB = 2,

  /**
   * Use the sRGB color space.
   */
  SRGB = 3,
}

/**
 * The camera RAW image size.
 */
declare enum CameraRAWSize {
  /**
   * 5120 x 3413 image.
   */
  EXTRALARGE = 4,

  /**
   * 4096 x 2731 image.
   */
  LARGE = 3,

  /**
   * 6144 x 4096 image.
   */
  MAXIMUM = 5,

  /**
   * 3072 x 2048 image.
   */
  MEDIUM = 2,

  /**
   * 1536 x 1024 image.
   */
  MINIMUM = 0,

  /**
   * 2048 x 1365 image.
   */
  SMALL = 1,
}

/**
 * The PDF magnification type.
 */
declare enum MagnificationType {
  /**
   * Displays the image at actual size.
   */
  ACTUALSIZE = 0,

  /**
   * Fits the image to the page.
   */
  FITPAGE = 1,
}

/**
 * The style to use when cropping a page.
 */
declare enum CropToType {
  /**
   * Crop to the art box.
   */
  ARTBOX = 5,

  /**
   * Crop to the bleed box.
   */
  BLEEDBOX = 3,

  /**
   * Crop to the bounding box.
   */
  BOUNDINGBOX = 0,

  /**
   * Crop to the crop box.
   */
  CROPBOX = 2,

  /**
   * Crop to the media box.
   */
  MEDIABOX = 1,

  /**
   * Crop to the trim box.
   */
  TRIMBOX = 4,
}

/**
 * The type size to use for font previews in the Type tool font menus.
 */
declare enum FontPreviewType {
  /**
   * Extra large preview.
   */
  EXTRALARGE = 4,

  /**
   * Huge preview.
   */
  HUGE = 5,

  /**
   * Large type.
   */
  LARGE = 3,

  /**
   * Medium type.
   */
  MEDIUM = 2,

  /**
   * No preview.
   */
  NONE = 0,

  /**
   * Small type.
   */
  SMALL = 1,
}

/**
 * Font size in panels and dialogs.
 */
declare enum FontSize {
  /**
   * Large size.
   */
  LARGE = 3,

  /**
   * Medium size.
   */
  MEDIUM = 2,

  /**
   * Small size.
   */
  SMALL = 1,
}

/**
 * The source for recording measurements.
 */
declare enum MeasurementSource {
  /**
   * The measure count tool.
   */
  MEASURECOUNTTOOL = 2,

  /**
   * The measure ruler tool.
   */
  MEASURERULERTOOL = 3,

  /**
   * The measure selection.
   */
  MEASURESELECTION = 1,
}

/**
 * The measurement upon which to take action.
 */
declare enum MeasurementRange {
  /**
   * Only active measurements.
   */
  ACTIVEMEASUREMENTS = 2,

  /**
   * All measurements.
   */
  ALLMEASUREMENTS = 1,
}

/**
 * A collection of documents.
 */
declare class Documents {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: Document

  /**
   * A document.
   * @param width The width of the document.
   * @param height The height of the document.
   * @param resolution The resolution of the document (in pixels per inch)
   * @param name The name of the document.
   * @param mode The document mode.
   * @param initialFill The initial fill of the document.
   * @param pixelAspectRatio The initial pixel aspect ratio of the document.
   * @param bitsPerChannel The number of bits per channel.
   * @param colorProfileName The name of color profile for document.
   */
  add(
    width?: UnitValue | number,
    height?: UnitValue | number,
    resolution?: number,
    name?: string,
    mode?: NewDocumentMode,
    initialFill?: DocumentFill,
    pixelAspectRatio?: number,
    bitsPerChannel?: BitsPerChannelType,
    colorProfileName?: string,
  ): Document

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): Document
}

/**
 * The collection of layer objects, including art layer and layer set objects, in the document.
 */
declare class Layers {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: Layer

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): Layer

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * The collection of layer set objects in the document.
 */
declare class LayerSets {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: LayerSet

  /**
   * Adds an element.
   */
  add(): LayerSet

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): LayerSet

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * The collection of art layer objects in the document.
 */
declare class ArtLayers {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: ArtLayer

  /**
   * Adds an element.
   */
  add(): ArtLayer

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): ArtLayer

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * The collection of channel objects in the document.
 */
declare class Channels {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: Channel

  /**
   * Adds an element.
   */
  add(): Channel

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): Channel

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * Guides associated with the document.
 */
declare class Guides {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * A guide.
   * @param direction Indicates whether the guide is vertical or horizontal.
   * @param coordinate Location of the guide from origin of image.
   */
  static add(direction: Direction, coordinate: UnitValue | number): Guide

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): Guide
}

/**
 * The history state objects associated with the document.
 */
declare class HistoryStates {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: HistoryState

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): HistoryState
}

/**
 * The layer comp objects associated with the document.
 */
declare class LayerComps {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: LayerComp

  /**
   * Adds a layer comp.
   * @param name The name of the layer comp.
   * @param comment The description of the layer comp.
   * @param appearance If true, uses the layer appearance or style for this layer comp.
   * @param position If true, uses the layer position for this layer comp.
   * @param visibility If true, uses the layer visibility for this layer comp.
   */
  static add(
    name: string,
    comment?: string,
    appearance?: boolean,
    position?: boolean,
    visibility?: boolean,
  ): LayerComp

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): LayerComp
}

/**
 * A collection of fonts available on your computer.
 */
declare class TextFonts {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: TextFont

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): TextFont
}

/**
 * The collection of path item objects in the document.
 */
declare class PathItems {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: PathItem

  /**
   * Creates a new path item.
   * @param name The name for the new path.
   * @param entirePath The item's sub paths.
   */
  static add(name: string, entirePath: SubPathInfo[]): PathItem

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): PathItem
}

/**
 * An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.
 */
declare class SubPathItems {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: SubPathItem

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): SubPathItem
}

/**
 * A collection of path point objects that comprises the path points property of the sub path item object.
 */
declare class PathPoints {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: PathPoint

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): PathPoint
}

/**
 * A collection of notifier objects in the document.
 */
declare class Notifiers {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: Notifier

  /**
   * Creates a notifier.
   * @param event The class id of the event, four characters or a unique string.
   * @param eventFile The script file to execute when the event occurs.
   * @param eventClass The class of the object the event is applied to, four characters or a unique string. When an event applies to multiple types of objects, you use the event class parameter to distinguish which object this Notifier applies to. For example, the Make event (“Mk“) applies to documents (“Dcmn”), channels (“Chnl”) and other objects.
   */
  static add(event: string, eventFile: File, eventClass?: string): Notifier

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): Notifier

  /**
   * Deletes all elements.
   */
  static removeAll(): void
}

/**
 * The collection of count items in the document.
 */
declare class CountItems {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: CountItem

  /**
   * Creates a count item.
   * @param position The position of origin.
   */
  static add(position: UnitPoint): CountItem

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): CountItem
}

/**
 * The collection of color samplers in the document.
 */
declare class ColorSamplers {
  /**
   * Number of elements in the collection.
   */
  readonly length: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Get an element in the collection with the provided index.
   * @param index
   */
  [index: number]: ColorSampler

  /**
   * Creates a color sampler.
   * @param position The horizontal and vertical (x,y) locations, respectively, of the color sampler.
   */
  static add(position: UnitPoint): ColorSampler

  /**
   * Get the first element in the collection with the provided name.
   * @param name
   */
  getByName(name: string): ColorSampler
}

/**
 * Options that can be specified when opening a document.
 */
declare class OpenOptions {}

/**
 * DEPRECATED.
 */
declare class PhotoCDOpenOptions extends OpenOptions {
  /**
   * The profile to use when reading the image.
   */
  colorProfileName: string

  /**
   * The color space for the image.
   */
  colorSpace: PhotoCDColorSpace

  /**
   * The image orientation.
   */
  orientation: Orientation

  /**
   * The dimensions of the image.
   */
  pixelSize: PhotoCDSize

  /**
   * The resolution of the image (in pixels per inch)
   */
  resolution: number
}

/**
 * Options that can be specified when opening a document in RAW format.
 */
declare class RawFormatOpenOptions extends OpenOptions {
  /**
   * The number of bits for each channel. Valid values: 8 or 16.
   */
  bitsPerChannel: number

  /**
   * The order in which bytes will be read. Valid only when 'bits per channel' = 16.
   */
  byteOrder: ByteOrder

  /**
   * The number of channels in the image. Valid only when 'bits per channel' = 16. Range: 1 to 56.
   */
  channelNumber: number

  /**
   * The number of bytes of information that will appear in the file before actual image information begins; that is, the number of zeroes inserted at the beginning of the file as placeholders. Range: 0 to 1919999.
   */
  headerSize: number

  /**
   * The image height (in pixels)
   */
  height: number

  /**
   * If true, color values are stored sequentially.
   */
  interleaveChannels: boolean

  /**
   * If true, the header is retained when saving.
   */
  retainHeader: boolean

  /**
   * The image width (in pixels)
   */
  width: number
}

/**
 * Options that can be specified when opening a generic PDF document.
 */
declare class GenericPDFOpenOptions extends OpenOptions {
  /**
   * If true, anti-aliasing is used.
   */
  antiAlias: boolean

  /**
   * The number of bits per channel.
   */
  bitsPerChannel: BitsPerChannelType

  /**
   * DEPRECATED.
   */
  constrainProportions: boolean

  /**
   * The cropping method to use.
   */
  cropPage: CropToType

  /**
   * DEPRECATED.
   */
  height: UnitValue | number

  /**
   * The document mode.
   */
  mode: OpenDocumentMode

  /**
   * The name of the document.
   */
  name: string

  /**
   * The number of the 3d object to open.
   */
  object: number

  /**
   * The number of the page or image to open.
   */
  page: number

  /**
   * The resolution of the document (in pixels per inch)
   */
  resolution: number

  /**
   * If true, suppresses any warnings that may occur during opening.
   */
  suppressWarnings: boolean

  /**
   * If true, the value specified in the page property refers to a page number. If false, the value specifies an image number.
   */
  use3DObjectNumber: boolean

  /**
   * If true, the value specified in the page property refers to a page number. If false, the value specifies an image number.
   */
  usePageNumber: boolean

  /**
   * DEPRECATED.
   */
  width: UnitValue | number
}

/**
 * Options that can be specified when opening a generic EPS document.
 */
declare class GenericEPSOpenOptions extends OpenOptions {
  /**
   * If true, anti-aliasing is used.
   */
  antiAlias: boolean

  /**
   * If true, the image proportions are constrained.
   */
  constrainProportions: boolean

  /**
   * The image height.
   */
  height: UnitValue | number

  /**
   * The document mode.
   */
  mode: OpenDocumentMode

  /**
   * The resolution of the document (in pixels per inch)
   */
  resolution: number

  /**
   * The image width.
   */
  width: UnitValue | number
}

/**
 * Options for opening a DICOM document.
 */
declare class DICOMOpenOptions extends OpenOptions {
  /**
   * If true, patient information is anonymized.
   */
  anonymize: boolean

  /**
   * The number of columns in an n-up configuration.
   */
  columns: number

  /**
   * If true, the image is inverted.
   */
  reverse: boolean

  /**
   * The number of rows in an n-up configuration.
   */
  rows: number

  /**
   * If true, overlays are shown (if present).
   */
  showOverlays: boolean

  /**
   * The contrast of the image in Houndsfield units.
   */
  windowLevel: number

  /**
   * The brightness of the image in Houndsfield units.
   */
  windowWidth: number
}

/**
 * Options for opening a camera RAW document.
 */
declare class CameraRAWOpenOptions extends OpenOptions {
  /**
   * The number of bits per channel.
   */
  bitsPerChannel: BitsPerChannelType

  /**
   * The blue hue of the shot. Range: -100 to 100.
   */
  blueHue: number

  /**
   * The blue saturation of the shot. Range: -100 to 100.
   */
  blueSaturation: number

  /**
   * The brightness of the shot. Range: 0 to 150.
   */
  brightness: number

  /**
   * The chromatic aberration B/Y of the shot. Range: -100 to 100.
   */
  chromaticAberrationBY: number

  /**
   * The chromatic aberration R/C of the shot. Range: -100 to 100.
   */
  chromaticAberrationRC: number

  /**
   * The color noise reduction of the shot. Range: 0 to 100.
   */
  colorNoiseReduction: number

  /**
   * The image color space.
   */
  colorSpace: ColorSpaceType

  /**
   * The constrast of the shot. Range: -50 to 100.
   */
  contrast: number

  /**
   * The exposure of the shot. Range: -4.0 to 4.0.
   */
  exposure: number

  /**
   * The green hue of the shot. Range: -100 to 100.
   */
  greenHue: number

  /**
   * The green saturation of the shot. Range: -100 to 100.
   */
  greenSaturation: number

  /**
   * The luminance smoothing of the shot. Range: 0 to 100.
   */
  luminanceSmoothing: number

  /**
   * The red hue of the shot. Range: -100 to 100.
   */
  redHue: number

  /**
   * The red saturation of the shot. Range: -100 to 100.
   */
  redSaturation: number

  /**
   * The resolution of the document (in pixels per inch)
   */
  resolution: number

  /**
   * The saturation of the shot. Range: -100 to 100.
   */
  saturation: number

  /**
   * The global settings for all Camera RAW options.
   */
  settings: CameraRAWSettingsType

  /**
   * The shadow tint of the shot. Range: -100 to 100.
   */
  shadowTint: number

  /**
   * The shadows of the shot. Range: 0 to 100.
   */
  shadows: number

  /**
   * The sharpness of the shot. Range: 0 to 100.
   */
  sharpness: number

  /**
   * The size of the new document.
   */
  size: CameraRAWSize

  /**
   * The temperature of the shot. Range: 2000 to 50000.
   */
  temperature: number

  /**
   * The tint of the shot. Range: -150 to 150.
   */
  tint: number

  /**
   * The vignetting amount of the shot. Range: -100 to 100.
   */
  vignettingAmount: number

  /**
   * The vignetting mid point of the shot. Range: -100 to 100.
   */
  vignettingMidpoint: number

  /**
   * The white balance options for the image.
   */
  whiteBalance: WhiteBalanceType
}

/**
 * Options for saving a file.
 */
declare enum SaveOptions {
  /**
   * Do not save changes.
   */
  DONOTSAVECHANGES = 2,

  /**
   * Ask the user whether to save.
   */
  PROMPTTOSAVECHANGES = 3,

  /**
   * Save changes.
   */
  SAVECHANGES = 1,
}

/**
 * Options for saving a Photoshop document.
 */
declare class PhotoshopSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * If true, the annotations are saved.
   */
  annotations: boolean

  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * If true, the layers are saved.
   */
  layers: boolean

  /**
   * If true, spot colors are saved.
   */
  spotColors: boolean
}

/**
 * Options for saving a document in BMP format.
 */
declare class BMPSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * The number of bits per sample.
   */
  depth: BMPDepthType

  /**
   * If true, the image is written from bottom to top.
   */
  flipRowOrder: boolean

  /**
   * The target operating system.
   */
  osType: OperatingSystem

  /**
   * If true, RLE compression is used.
   */
  rleCompression: boolean
}

/**
 * Options for saving a document in GIF format.
 */
declare class GIFSaveOptions {
  /**
   * The number of colors in palette. Not valid for all palette types.
   */
  colors: number

  /**
   * The type of dither.
   */
  dither: Dither

  /**
   * The amount of dither. Valid only when 'dither type' is diffusion. Range: 1 to 100.
   */
  ditherAmount: number

  /**
   * The type of colors to force into the color palette.
   */
  forced: ForcedColors

  /**
   * If true, rows are interlaced.
   */
  interlaced: boolean

  /**
   * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white.
   */
  matte: MatteType

  /**
   * The type of palette to use.
   */
  palette: PaletteType

  /**
   * If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion.
   */
  preserveExactColors: boolean

  /**
   * If true, preserves transparent ares of the image during GIF conversion.
   */
  transparency: boolean
}

/**
 * Options for saving a document in EPS format.
 */
declare class EPSSaveOptions {
  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * The type of encoding to use for the document.
   */
  encoding: SaveEncoding

  /**
   * If true, includes the halftone screen.
   */
  halftoneScreen: boolean

  /**
   * If true, uses image interpolation.
   */
  interpolation: boolean

  /**
   * The type of preview.
   */
  preview: Preview

  /**
   * If true, uses PostScript color management.
   */
  psColorManagement: boolean

  /**
   * If true, includes the transfer functions in the document to compensate for dot gain between the image and film.
   */
  transferFunction: boolean

  /**
   * If true, displays white areas as transparent. Valid only for documents in BitMap mode.
   */
  transparentWhites: boolean

  /**
   * If true, includes vector data. Valid only when the document contains vector data (un-rasterized text).
   */
  vectorData: boolean
}

/**
 * Options for saving a document in JPEG format.
 */
declare class JPEGSaveOptions {
  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * The download format to use.
   */
  formatOptions: FormatOptions

  /**
   * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white.
   */
  matte: MatteType

  /**
   * The quality of the produced image.
   */
  quality: number

  /**
   * The number of scans. Valid only for progressive type JPEG files.
   */
  scans: number
}

/**
 * Options for saving a document in PDF format.
 */
declare class PDFSaveOptions {
  /**
   * The PDF version to make the document compatible with.
   */
  PDFCompatibility: PDFCompatibility

  /**
   * The PDF standard to make the document compatible with.
   */
  PDFStandard: PDFStandard

  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * If true, the annotations are saved.
   */
  annotations: boolean

  /**
   * If true, converts the color profile to the destination profile.
   */
  colorConversion: boolean

  /**
   * If true, converts a 16-bit image to 8-bit for better compatibility with other applications.
   */
  convertToEightBit: boolean

  /**
   * Description of the save options in use.
   */
  description: string

  /**
   * Describes the final RGB or CMYK output device, such as a monitor or press standard.
   */
  destinationProfile: string

  /**
   * The downsample method to use.
   */
  downSample: PDFResample

  /**
   * The size (in pixels per inch) to downsample images to if they exceed the value specified for 'down sample size limit'.
   */
  downSampleSize: number

  /**
   * Limits downsampling or subsampling to images that exceed this value (in pixels per inch).
   */
  downSampleSizeLimit: number

  /**
   * DEPRECATED, ( should the embedded color profile be downgraded to version 2 )
   */
  downgradeColorProfile: boolean

  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * DEPRECATED. ( embed fonts? Only valid if a text layer is included )
   */
  embedFonts: boolean

  /**
   * If true, includes a small preview image in Acrobat.
   */
  embedThumbnail: boolean

  /**
   * The encoding method to use.
   */
  encoding: PDFEncoding

  /**
   * DEPRECATED. ( use image interpolation? )
   */
  interpolation: boolean

  /**
   * The quality of the produced image. Valid only for JPEG-encoded PDF documents. Range: 0 to 12.
   */
  jpegQuality: number

  /**
   * If true, the layers are saved.
   */
  layers: boolean

  /**
   * If true, improves performance of PDFs on Web servers.
   */
  optimizeForWeb: boolean

  /**
   * An optional comment field for inserting descriptions of the output condition. The text is stored in the PDF/X file.
   */
  outputCondition: string

  /**
   * The identifier for the output condition.
   */
  outputConditionID: string

  /**
   * If true, allows users to reopen the PDF in Photoshop with native Photoshop data intact.
   */
  preserveEditing: boolean

  /**
   * The preset file to use for settings; overrides other settings.
   */
  presetFile: string

  /**
   * If true, shows which profiles to include.
   */
  profileInclusionPolicy: boolean

  /**
   * The URL where the output condition is registered.
   */
  registryName: string

  /**
   * If true, the spot colors are saved.
   */
  spotColors: boolean

  /**
   * The compression option. Valid only when encoding is JPEG2000.
   */
  tileSize: number

  /**
   * DEPRECATED.
   */
  transparency: boolean

  /**
   * DEPRECATED. ( use outlines for text? Only valid if vector data is included )
   */
  useOutlines: boolean

  /**
   * DEPRECATED. ( include vector data )
   */
  vectorData: boolean

  /**
   * If true, opens the saved PDF in Acrobat.
   */
  view: boolean
}

/**
 * Options for saving a document in PICT format.
 */
declare class PICTFileSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  static alphaChannels: boolean

  /**
   * The compression method.
   */
  static compression: PICTCompression

  /**
   * If true, the color profile is embedded in the document.
   */
  static embedColorProfile: boolean

  /**
   * The number of bits per pixel.
   */
  static resolution: PICTBitsPerPixels
}

/**
 * Options for saving a document as a PICT resource file.
 */
declare class PICTResourceSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * The compression type.
   */
  compression: PICTCompression

  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * The name of PICT resource.
   */
  name: string

  /**
   * The number of bits per pixel.
   */
  resolution: PICTBitsPerPixels

  /**
   * The ID of the PICT resource.
   */
  resourceID: number
}

/**
 * Options for saving a document in Pixar format.
 */
declare class PixarSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean
}

/**
 * Options for saving a document in PNG format.
 */
declare class PNGSaveOptions {
  /**
   * Compression used on the image.
   */
  compression: number

  /**
   * If true, rows are interlaced.
   */
  interlaced: boolean
}

/**
 * Options for saving a document in RAW format.
 */
declare class RawSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * If true, spot colors are saved.
   */
  spotColors: boolean
}

/**
 * Options for saving a document in SGI RGB format.
 */
declare class SGIRGBSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * If true, the spot colors are saved.
   */
  spotColors: boolean
}

/**
 * Options for saving a document in TGA (Targa) format.
 */
declare class TargaSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * The number of bits per pixel.
   */
  resolution: TargaBitsPerPixels

  /**
   * If true, RLE compression is used.
   */
  rleCompression: boolean
}

/**
 * Options for saving a document in TIFF format.
 */
declare class TiffSaveOptions {
  /**
   * If true, the alpha channels are saved.
   */
  alphaChannels: boolean

  /**
   * If true, the annotations are saved.
   */
  annotations: boolean

  /**
   * The order in which the bytes will be read. Default: Mac OS when running in Mac OS, and IBM PC when running in Windows.
   */
  byteOrder: ByteOrder

  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * The compression type.
   */
  imageCompression: TIFFEncoding

  /**
   * If true, the channels in the image are interleaved.
   */
  interleaveChannels: boolean

  /**
   * The quality of the produced image, which is inversely proportionate to the amount of JPEG compression. Valid only for JPEG compressed TIFF documents. Range: 0 to 12.
   */
  jpegQuality: number

  /**
   * The method of compression to use when saving layers (as opposed to saving composite data). Valid only when 'layers' = true.
   */
  layerCompression: LayerCompression

  /**
   * If true, the layers are saved.
   */
  layers: boolean

  /**
   * If true, preserves multi-resolution information.
   */
  saveImagePyramid: boolean

  /**
   * If true, spot colors are saved.
   */
  spotColors: boolean

  /**
   * If true, saves the transparency as an additional alpha channel when the file is opened in another application.
   */
  transparency: boolean
}

/**
 * Options for saving a document in Photoshop DCS 1.0 format.
 */
declare class DCS1_SaveOptions {
  /**
   * The DCS type.
   */
  DCS: DCSType

  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * The type of encoding to use for the document.
   */
  encoding: SaveEncoding

  /**
   * If true, includes halftone screen.
   */
  halftoneScreen: boolean

  /**
   * If true, image interpolation is used.
   */
  interpolation: boolean

  /**
   * The type of preview.
   */
  preview: Preview

  /**
   * If true, includes transfer functions in the document to compensate for dot gain between the image and film.
   */
  transferFunction: boolean

  /**
   * If true, includes vector data. Valid only if the document contains vector data (un-rasterized text).
   */
  vectorData: boolean
}

/**
 * Options for saving a document in Photoshop DCS 2.0 format.
 */
declare class DCS2_SaveOptions {
  /**
   * The DCS type.
   */
  DCS: DCSType

  /**
   * If true, the color profile is embedded in the document.
   */
  embedColorProfile: boolean

  /**
   * The type of encoding to use for document.
   */
  encoding: SaveEncoding

  /**
   * If true, includes halftone screen.
   */
  halftoneScreen: boolean

  /**
   * If true, image interpolation is used.
   */
  interpolation: boolean

  /**
   * If true, saves color channels as multiple files.
   */
  multiFileDCS: boolean

  /**
   * The type of preview.
   */
  preview: Preview

  /**
   * If true, the spot colors are saved.
   */
  spotColors: boolean

  /**
   * If true, includes transfer functions in the document to compensate for dot gain between the image and film.
   */
  transferFunction: boolean

  /**
   * If true, includes vector data. Valid only if the document contains vector data (un-rasterized text).
   */
  vectorData: boolean
}

/**
 * Options for exporting an object.
 */
declare class ExportOptions {}

/**
 * Options for exporting Illustrator paths.
 */
declare class ExportOptionsIllustrator extends ExportOptions {
  /**
   * The path to export.
   */
  path: IllustratorPathType

  /**
   * The name of the path to export. Valid only for named paths.
   */
  pathName: string
}

/**
 * Options for exporting Save For Web files.
 */
declare class ExportOptionsSaveForWeb extends ExportOptions {
  /**
   * If true, uses 8 bits. If false, uses 24 bits. Valid only when 'format' = PNG.
   */
  PNG8: boolean

  /**
   * The amount of blur to apply to the image to reduce artifacts.
   */
  blur: number

  /**
   * The color reduction algorithm.
   */
  colorReduction: ColorReductionType

  /**
   * The number of colors in the palette.
   */
  colors: number

  /**
   * The type of dither.
   */
  dither: Dither

  /**
   * The amount of dither. Valid only when 'dither' = diffusion.
   */
  ditherAmount: number

  /**
   * The file format to use. Save For Web supports only Compuserve GIF, JPEG, PNG-8, PNG-24, and BMP formats.
   */
  format: SaveDocumentType

  /**
   * If true, includes the document's embedded profile.
   */
  includeProfile: boolean

  /**
   * If true, the image downloads in multiple passes, progressive.
   */
  interlaced: boolean

  /**
   * The amount of lossiness allowed.
   */
  lossy: number

  /**
   * The colors to blend transparent pixels against.
   */
  matteColor: RGBColor

  /**
   * If true, creates smaller but less compatible files.
   */
  optimized: boolean

  /**
   * The quality of the produced image (as a percentage). Range: 0 to 100.
   */
  quality: number

  /**
   * If true, transparent areas of the image are included in the saved image.
   */
  transparency: boolean

  /**
   * The amount of transparency dither. Valid only when 'transparency' = true.
   */
  transparencyAmount: number

  /**
   * The transparency dither algorithm.
   */
  transparencyDither: Dither

  /**
   * The tolerance amount within which to snap close colors to web palette colors.
   */
  webSnap: number
}

/**
 * Options for converting documents.
 */
declare class DocumentConversionOptions {}

/**
 * Options for changing the document mode to Bitmap.
 */
declare class BitmapConversionOptions extends DocumentConversionOptions {
  /**
   * The angle (in degrees) at which to orient individual dots. Valid only when 'method' = halftone screen. Range: -180 to 180.
   */
  angle: number

  /**
   * The number of printer dots per inch. Valid only when 'method' = halftone screen. Range: 1.0 to 999.99.
   */
  frequency: number

  /**
   * The conversion method.
   */
  method: BitmapConversionType

  /**
   * The name of the pattern to use. Valid only when 'method' = custom.
   */
  patternName: string

  /**
   * The output resolution (in pixels per inch)
   */
  resolution: number

  /**
   * The dot shape. Valid only when 'method' = halftone screen.
   */
  shape: BitmapHalfToneType
}

/**
 * Options for converting an RGB image to an indexed color model.
 */
declare class IndexedConversionOptions extends DocumentConversionOptions {
  /**
   * The number of colors in the palette. Not valid for all palette types.
   */
  colors: number

  /**
   * The type of dither.
   */
  dither: Dither

  /**
   * The amount of dither. Valid only when 'dither' = diffusion.
   */
  ditherAmount: number

  /**
   * The type of colors to force into the color palette.
   */
  forced: ForcedColors

  /**
   * The color to use to fill anti-aliased edges adjacent to transparent areas of the image. When transparency = false, the matte color is applied to transparent areas.
   */
  matte: MatteType

  /**
   * The type of palette.
   */
  palette: PaletteType

  /**
   * If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion.
   */
  preserveExactColors: boolean

  /**
   * If true, preserves transparent areas of the image during conversion to GIF format.
   */
  transparency: boolean
}

/**
 * A color value.
 */
declare class Color {}

/**
 * A color definition used in the document.
 */
declare class SolidColor {
  /**
   * The CMYK color model.
   */
  static cmyk: CMYKColor

  /**
   * The CMYK color model.
   */
  cmyk: CMYKColor

  /**
   * The grayscale color model.
   */
  static gray: GrayColor

  /**
   * The grayscale color model.
   */
  gray: GrayColor

  /**
   * The HSB color model.
   */
  static hsb: HSBColor

  /**
   * The HSB color model.
   */
  hsb: HSBColor

  /**
   * The lab color model.
   */
  static lab: LabColor

  /**
   * The lab color model.
   */
  lab: LabColor

  /**
   * The color model.
   */
  model: ColorModel

  /**
   * The color model.
   */
  static model: ColorModel

  /**
   * The nearest web color to the current color.
   */
  static readonly nearestWebColor: RGBColor

  /**
   * The nearest web color to the current color.
   */
  readonly nearestWebColor: RGBColor

  /**
   * The RGB color model.
   */
  rgb: RGBColor

  /**
   * The RGB color model.
   */
  static rgb: RGBColor

  /**
   * Compares two colors.
   * @param color Another color to compare with.
   */
  isEqual(color: SolidColor): boolean
}

/**
 * Options for defining a gray color.
 */
declare class GrayColor extends Color {
  /**
   * The gray value. Range: 0.0 to 100.0.
   */
  static gray: number

  /**
   * The gray value. Range: 0.0 to 100.0.
   */
  gray: number
}

/**
 * The definition of an RGB color mode.
 */
declare class RGBColor extends Color {
  /**
   * The blue color value. Range: 0.0 to 255.0.
   */
  static blue: number

  /**
   * The blue color value. Range: 0.0 to 255.0.
   */
  blue: number

  /**
   * The green color value. Range: 0.0 to 255.0.
   */
  static green: number

  /**
   * The green color value. Range: 0.0 to 255.0.
   */
  green: number

  /**
   * The hex representation of this color.
   */
  static hexValue: string

  /**
   * The hex representation of this color.
   */
  hexValue: string

  /**
   * The red color value. Range: 0.0 to 255.0.
   */
  static red: number

  /**
   * The red color value. Range: 0.0 to 255.0.
   */
  red: number
}

/**
 * A CMYK color specification.
 */
declare class CMYKColor extends Color {
  /**
   * The black color value. Range: 0.0 to 100.0.
   */
  static black: number

  /**
   * The black color value. Range: 0.0 to 100.0.
   */
  black: number

  /**
   * The cyan color value. Range: 0.0 to 100.0.
   */
  static cyan: number

  /**
   * The cyan color value. Range: 0.0 to 100.0.
   */
  cyan: number

  /**
   * The magenta color value. Range: 0.0 to 100.0.
   */
  static magenta: number

  /**
   * The magenta color value. Range: 0.0 to 100.0.
   */
  magenta: number

  /**
   * The yellow color value. Range: 0.0 to 100.0.
   */
  static yellow: number

  /**
   * The yellow color value. Range: 0.0 to 100.0.
   */
  yellow: number
}

/**
 * A Lab color specification.
 */
declare class LabColor extends Color {
  /**
   * The a-value. Range: -128.0 and 127.0.
   */
  static A: number

  /**
   * The a-value. Range: -128.0 and 127.0.
   */
  A: number

  /**
   * The b-value. Range: -128.0 and 127.0.
   */
  static B: number

  /**
   * The b-value. Range: -128.0 and 127.0.
   */
  B: number

  /**
   * The L-value. Range: 0.0 to 100.0.
   */
  static L: number

  /**
   * The L-value. Range: 0.0 to 100.0.
   */
  L: number
}

/**
 * An HSB color specification.
 */
declare class HSBColor extends Color {
  /**
   * The brightness value. Range: 0.0 to 100.0.
   */
  static brightness: number

  /**
   * The brightness value. Range: 0.0 to 100.0.
   */
  brightness: number

  /**
   * The hue value. Range: 0.0 to 360.0.
   */
  static hue: number

  /**
   * The hue value. Range: 0.0 to 360.0.
   */
  hue: number

  /**
   * The saturation value. Range: 0.0 to 100.0.
   */
  static saturation: number

  /**
   * The saturation value. Range: 0.0 to 100.0.
   */
  saturation: number
}

/**
 * Represents a missing color.
 */
declare class NoColor extends Color {}

/**
 * Options for the PDF presentation command.
 */
declare class PresentationOptions {
  /**
   * Options for creating the PDF file.
   */
  static PDFFileOptions: PDFSaveOptions

  /**
   * If true, the presentation auto advances.
   */
  static autoAdvance: boolean

  /**
   * If true, includes the file name for the image.
   */
  static includeFilename: boolean

  /**
   * The amount of time (in seconds) before auto advancing the view. Valid only when 'auto advance' is true. Range: 1 to 60.
   */
  static interval: number

  /**
   * If true, the presentation loops after the last page.
   */
  static loop: boolean

  /**
   * The magnification type when viewing the image.
   */
  static magnification: MagnificationType

  /**
   * If true, the file type is presentation. If false, the file type is Multi-Page document.
   */
  static presentation: boolean

  /**
   * The image transition type.
   */
  static transition: TransitionType
}

/**
 * Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryOptions {
  /**
   * Add width and height attributes for images.
   */
  static addSizeAttributes: boolean

  /**
   * Options related to banner settings.
   */
  static bannerOptions: GalleryBannerOptions

  /**
   * Options related to custom color settings.
   */
  static customColorOptions: GalleryCustomColorOptions

  /**
   * The email address to show on the web page.
   */
  static emailAddress: string

  /**
   * Options related to images settings.
   */
  static imagesOptions: GalleryImagesOptions

  /**
   * Include all files found in sub folders of the input folder.
   */
  static includeSubFolders: boolean

  /**
   * The style to use for laying out the web page.
   */
  static layoutStyle: string

  /**
   * Save all of the metadata in the JPEG files.
   */
  static preserveAllMetadata: boolean

  /**
   * Options related to security settings.
   */
  static securityOptions: GallerySecurityOptions

  /**
   * Options related to thumbnail settings.
   */
  static thumbnailOptions: GalleryThumbnailOptions

  /**
   * Short web page extension .htm or long web page extension .html.
   */
  static useShortExtension: boolean

  /**
   * Web page should use UTF-8 encoding.
   */
  static useUTF8Encoding: boolean
}

/**
 * Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryBannerOptions {
  /**
   * Web photo gallery contact info.
   */
  static contactInfo: string

  /**
   * Web photo gallery date.
   */
  static date: string

  /**
   * The font setting for the banner text.
   */
  static font: GalleryFontType

  /**
   * The size of the font for the banner text.
   */
  static fontSize: number

  /**
   * Web photo gallery photographer.
   */
  static photographer: string

  /**
   * Web photo gallery site name.
   */
  static siteName: string
}

/**
 * Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryImagesOptions {
  /**
   * The amount of border pixels you want between your images.
   */
  static border: number

  /**
   * Generate a caption for the images.
   */
  static caption: boolean

  /**
   * Resized image dimensions in pixels.
   */
  static dimension: number

  /**
   * Font for the gallery images text.
   */
  static font: GalleryFontType

  /**
   * Font size for the gallery images text.
   */
  static fontSize: number

  /**
   * The quality setting for the JPEG image.
   */
  static imageQuality: number

  /**
   * Include the copyright in the text for the gallery images.
   */
  static includeCopyright: boolean

  /**
   * Include the credits in the text for the gallery images.
   */
  static includeCredits: boolean

  /**
   * Include the file name in the text for the gallery images.
   */
  static includeFilename: boolean

  /**
   * Include the title in the text for the gallery images.
   */
  static includeTitle: boolean

  /**
   * Add numeric links.
   */
  static numericLinks: boolean

  /**
   * How should the image be constrained.
   */
  static resizeConstraint: GalleryConstrainType

  /**
   * Resize images data.
   */
  static resizeImages: boolean
}

/**
 * Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryThumbnailOptions {
  /**
   * The amount of border pixels you want around your thumbnail images.
   */
  static border: number

  /**
   * With caption.
   */
  static caption: boolean

  /**
   * Web photo gallery thumbnail columns.
   */
  static columnCount: number

  /**
   * Web photo gallery thumbnail dimension in pixels.
   */
  static dimension: number

  /**
   * Web photo gallery font.
   */
  static font: GalleryFontType

  /**
   * The size of the font for the thumbnail images text.
   */
  static fontSize: number

  /**
   * Include copyright for thumbnail.
   */
  static includeCopyright: boolean

  /**
   * Include credits for thumbnail.
   */
  static includeCredits: boolean

  /**
   * Include file name for thumbnail.
   */
  static includeFilename: boolean

  /**
   * Include title for thumbnail.
   */
  static includeTitle: boolean

  /**
   * Web photo gallery thumbnail rows.
   */
  static rowCount: number

  /**
   * The size of the thumbnail images.
   */
  static size: GalleryThumbSizeType
}

/**
 * Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GalleryCustomColorOptions {
  /**
   * Active link color.
   */
  static activeLinkColor: RGBColor

  /**
   * Background color.
   */
  static backgroundColor: RGBColor

  /**
   * Banner color.
   */
  static bannerColor: RGBColor

  /**
   * Link color.
   */
  static linkColor: RGBColor

  /**
   * Text color.
   */
  static textColor: RGBColor

  /**
   * Visited link color.
   */
  static visitedLinkColor: RGBColor
}

/**
 * Deprecated, the make photo gallery method has moved to Bridge.
 */
declare class GallerySecurityOptions {
  /**
   * Web photo gallery security content.
   */
  static content: GallerySecurityType

  /**
   * Web photo gallery security font.
   */
  static font: GalleryFontType

  /**
   * Web photo gallery security font size.
   */
  static fontSize: number

  /**
   * Web page security opacity as a percent.
   */
  static opacity: number

  /**
   * Web photo gallery security custom text.
   */
  static text: string

  /**
   * Web page security text color.
   */
  static textColor: RGBColor

  /**
   * Web photo gallery security text position.
   */
  static textPosition: GallerySecurityTextPositionType

  /**
   * Web photo gallery security text rotate.
   */
  static textRotate: GallerySecurityTextRotateType
}

/**
 * Options that can be specified for a contact sheet.
 */
declare class ContactSheetOptions {
  /**
   * If true, places the images horizontally first.
   */
  static acrossFirst: boolean

  /**
   * If true, rotates images for best fit.
   */
  static bestFit: boolean

  /**
   * If true, uses the filename as a caption for the image.
   */
  static caption: boolean

  /**
   * The number of contact sheet columns.
   */
  static columnCount: number

  /**
   * If true, flattens all layers in the final document.
   */
  static flatten: boolean

  /**
   * The font used for the caption.
   */
  static font: GalleryFontType

  /**
   * The caption font size.
   */
  static fontSize: number

  /**
   * The height (in pixels) of the resulting document. Range: 100 to 2900.
   */
  static height: number

  /**
   * The horizontal spacing (in pixels) between images. Range: 0 to 29000.
   */
  static horizontal: number

  /**
   * The document color mode.
   */
  static mode: NewDocumentMode

  /**
   * The resolution of the document (in pixels per inch). Range: 35 to 1200.
   */
  static resolution: number

  /**
   * The number of contact sheet rows.
   */
  static rowCount: number

  /**
   * If true, auto spaces the images in the contact sheet.
   */
  static useAutoSpacing: boolean

  /**
   * The vertical spacing (in pixels) between images. Range: 0 to 29000.
   */
  static vertical: number

  /**
   * The width (in pixels) of the resulting document. Range: 100 to 2900.
   */
  static width: number
}

/**
 * Options that can be specified for a Picture Package.
 */
declare class PicturePackageOptions {
  /**
   * The content information.
   */
  static content: PicturePackageTextType

  /**
   * If true, flattens all layers in the final document.
   */
  static flatten: boolean

  /**
   * The font used for security text.
   */
  static font: GalleryFontType

  /**
   * The font size.
   */
  static fontSize: number

  /**
   * The layout to use to generate the picture package.
   */
  static layout: string

  /**
   * The document color mode.
   */
  static mode: NewDocumentMode

  /**
   * The web page security text opacity (as a percentage) Range: 0 to 100.
   */
  static opacity: number

  /**
   * The resolution of the document (in pixels per inch)
   */
  static resolution: number

  /**
   * The picture package custom text.
   */
  static text: string

  /**
   * The color of the security text.
   */
  static textColor: RGBColor

  /**
   * The position of the security text.
   */
  static textPosition: GallerySecurityTextPositionType

  /**
   * The orientation of the security text.
   */
  static textRotate: GallerySecurityTextRotateType
}

/**
 * Options to specify when running a Batch command.
 */
declare class BatchOptions {
  /**
   * The type of destination for the processed files.
   */
  static destination: BatchDestinationType

  /**
   * The folder location for the processed files. Valid only when 'destination' = folder.
   */
  static destinationFolder: File

  /**
   * The file in which to log errors encountered. To display errors on the screen and stop batch processing when errors occur, leave blank.
   */
  static errorFile: File

  /**
   * A list of file naming options. Maximum: 6.
   */
  static fileNaming: FileNamingType[]

  /**
   * If true, the final file names are Macintosh compatible.
   */
  static macintoshCompatible: boolean

  /**
   * If true, overrides action open commands.
   */
  static overrideOpen: boolean

  /**
   * If true, overrides save as action steps with the specified destination.
   */
  static overrideSave: boolean

  /**
   * The starting serial number to use in naming files.
   */
  static startingSerial: number

  /**
   * If true, suppresses file open options dialogs.
   */
  static suppressOpen: boolean

  /**
   * If true, suppresses color profile warnings.
   */
  static suppressProfile: boolean

  /**
   * If true, the final file names are Unix compatible.
   */
  static unixCompatible: boolean

  /**
   * If true, the final file names are Windows compatible.
   */
  static windowsCompatible: boolean
}

/**
 * An array of path point info objects that describes a straight or curved segment of a path.
 */
declare class SubPathInfo {
  /**
   * If true, the path is closed.
   */
  static closed: boolean

  /**
   * All of the sub path item's path points.
   */
  static entireSubPath: PathPointInfo[]

  /**
   * The sub path operation on other sub paths.
   */
  static operation: ShapeOperation
}

/**
 * A point on a path, expressed as an array of three coordinate arrays: the anchor point, left direction point, and right direction point. For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved segements, the coordinates are different. The difference between the anchor point and the left or right direction points determines the arc of the curve. You use the left direction point to bend the curve "outward" or make it convex; you use the right direction point to bend the curve "inward" or make it concave.
 */
declare class PathPointInfo {
  /**
   * The x and y coordinates of one end point of the path segment.
   */
  static anchor: (Point | [number, number])[]

  /**
   * The x and y coordinates of one end point of the path segment.
   */
  anchor: (Point | [number, number])[]

  /**
   * The point type.
   */
  static kind: PointKind

  /**
   * The point type.
   */
  kind: PointKind

  /**
   * The location of the left direction point ("in" position).
   */
  static leftDirection: (Point | [number, number])[]

  /**
   * The location of the left direction point ("in" position).
   */
  leftDirection: (Point | [number, number])[]

  /**
   * The location of the right direction point ("out" position).
   */
  static rightDirection: (Point | [number, number])[]

  /**
   * The location of the right direction point ("out" position).
   */
  rightDirection: (Point | [number, number])[]
}

/**
 * A record of key-value pairs for actions, such as those included on the Adobe Photoshop Actions menu. The ActionDescriptor class is part of the Action Manager functionality. For more details on the Action Manager, see the Photoshop Scripting Guide.
 */
declare class ActionDescriptor {
  /**
   * The number of keys contained in the descriptor.
   */
  static readonly count: number

  /**
   * The class name of the referenced ActionDescriptor object.
   */
  static readonly typename: string

  /**
   * Clears the descriptor.
   */
  clear(): void

  /**
   * Erases key from the descriptor.
   */
  erase(key: number): void

  /**
   * Creates descriptor from stream of bytes; for reading from disk.
   */
  fromStream(value: string): void

  /**
   * Gets the value of key of type boolean.
   */
  getBoolean(key: number): boolean

  /**
   * Gets the value of key of type class.
   */
  getClass(key: number): number

  /**
   * Gets raw byte data as string value.
   */
  getData(key: number): string

  /**
   * Gets the value of key of type double.
   */
  getDouble(key: number): number

  /**
   * Gets the enumeration type of key.
   */
  getEnumerationType(key: number): number

  /**
   * Gets the enumeration value of key.
   */
  getEnumerationValue(key: number): number

  /**
   * Gets the value of key of type integer.
   */
  getInteger(key: number): number

  /**
   * Gets the ID of the Nth key, provided by index.
   */
  getKey(index: number): number

  /**
   * Gets the value of key of type large integer.
   */
  getLargeInteger(key: number): number

  /**
   * Gets the value of key of type list.
   */
  getList(key: number): ActionList

  /**
   * Gets the class ID of an object in key of type object.
   */
  getObjectType(key: number): number

  /**
   * Gets the value of key of type object.
   */
  getObjectValue(key: number): ActionDescriptor

  /**
   * Gets the value of key of type File.
   */
  getPath(key: number): File

  /**
   * Gets the value of key of type ActionReference.
   */
  getReference(key: number): ActionReference

  /**
   * Gets the value of key of type string.
   */
  getString(key: number): string

  /**
   * Gets the type of key.
   */
  getType(key: number): DescValueType

  /**
   * Gets the unit type of key of type UnitDouble.
   */
  getUnitDoubleType(key: number): number

  /**
   * Gets the value of key of type UnitDouble.
   */
  getUnitDoubleValue(key: number): number

  /**
   * Checks whether the descriptor contains the provided key.
   */
  hasKey(key: number): boolean

  /**
   * Determines whether the descriptor is the same as another descriptor.
   */
  isEqual(otherDesc: ActionDescriptor): boolean

  /**
   * Sets the value for key whose type is boolean.
   */
  putBoolean(key: number, value: boolean): void

  /**
   * Sets the value for key whose type is class.
   */
  putClass(key: number, value: number): void

  /**
   * Puts raw byte data as string value.
   */
  putData(key: number, value: string): void

  /**
   * Sets the value for key whose type is double.
   */
  putDouble(key: number, value: number): void

  /**
   * Sets the enumeration type and value for key.
   */
  putEnumerated(key: number, enumType: number, value: number): void

  /**
   * Sets the value for key whose type is integer.
   */
  putInteger(key: number, value: number): void

  /**
   * Sets the value for key whose type is large integer.
   */
  putLargeInteger(key: number, value: number): void

  /**
   * Sets the value for key whose type is an ActionList object.
   */
  putList(key: number, value: ActionList): void

  /**
   * Sets the value for key whose type is an object, represented by an ActionDescriptor.
   */
  putObject(key: number, classID: number, value: ActionDescriptor): void

  /**
   * Sets the value for key whose type is path.
   */
  putPath(key: number, value: File): void

  /**
   * Sets the value for key whose type is an object reference.
   */
  putReference(key: number, value: ActionReference): void

  /**
   * Sets the value for key whose type is string.
   */
  putString(key: number, value: string): void

  /**
   * Sets the value for key whose type is unit value formatted as double.
   */
  putUnitDouble(key: number, unitID: number, value: number): void

  /**
   * Gets the entire descriptor as stream of bytes, for writing to disk.
   */
  toStream(): string
}

/**
 * The list of commands that comprise an Action (such as an Action created using the Actions palette in the Adobe Photoshop application). The action list object is part of the Action Manager functionality. For details on using the Action Manager, see the Photoshop Scripting Guide.
 */
declare class ActionList {
  /**
   * The number of commands that comprise the action.
   */
  static readonly count: number

  /**
   * The class name of the referenced ActionList object.
   */
  static readonly typename: string

  /**
   * Clears the list.
   */
  clear(): void

  /**
   * Gets the value of list element of type boolean.
   */
  getBoolean(index: number): boolean

  /**
   * Gets the value of list element of type class.
   */
  getClass(index: number): number

  /**
   * Gets raw byte data as string value.
   */
  getData(index: number): string

  /**
   * Gets the value of list element of type double.
   */
  getDouble(index: number): number

  /**
   * Gets the enumeration type of list element.
   */
  getEnumerationType(index: number): number

  /**
   * Gets the enumeration value of list element.
   */
  getEnumerationValue(index: number): number

  /**
   * Gets the value of list element of type integer.
   */
  getInteger(index: number): number

  /**
   * Gets the value of list element of type large integer.
   */
  getLargeInteger(index: number): number

  /**
   * Gets the value of list element of type list.
   */
  getList(index: number): ActionList

  /**
   * Gets the class ID of list element of type object.
   */
  getObjectType(index: number): number

  /**
   * Gets the value of list element of type object.
   */
  getObjectValue(index: number): ActionDescriptor

  /**
   * Gets the value of list element of type File.
   */
  getPath(index: number): File

  /**
   * Gets the value of list element of type ActionReference.
   */
  getReference(index: number): ActionReference

  /**
   * Gets the value of list element of type string.
   */
  getString(index: number): string

  /**
   * Gets the type of list element.
   */
  getType(index: number): DescValueType

  /**
   * Gets the unit value type of list element of type double.
   */
  getUnitDoubleType(index: number): number

  /**
   * Gets the unit value of list element of type double.
   */
  getUnitDoubleValue(index: number): number

  /**
   * Appends new value, true or false.
   */
  putBoolean(value: boolean): void

  /**
   * Appends new value, class or data type.
   */
  putClass(value: number): void

  /**
   * Appends new value, string containing raw byte data.
   */
  putData(value: string): void

  /**
   * Appends new value, double.
   */
  putDouble(value: number): void

  /**
   * Appends new value, an enumerated (constant) value.
   */
  putEnumerated(enumType: number, value: number): void

  /**
   * Appends new value, an integer.
   */
  putInteger(value: number): void

  /**
   * Appends new value, large integer.
   */
  putLargeInteger(value: number): void

  /**
   * Appends new value, nested action list.
   */
  putList(value: ActionList): void

  /**
   * Appends new value, an object.
   */
  putObject(classID: number, value: ActionDescriptor): void

  /**
   * Appends new value, path.
   */
  putPath(value: File): void

  /**
   * Appends new value, reference to an object created in the script.
   */
  putReference(value: ActionReference): void

  /**
   * Appends new value, string.
   */
  putString(value: string): void

  /**
   * Appends new value, unit/value pair.
   */
  putUnitDouble(classID: number, value: number): void
}

/**
 * Contains data describing referenced Action. The action reference object is part of the Action Manager functionality. For details on using the Action Manager, see the Photoshop Scripting Guide.
 */
declare class ActionReference {
  /**
   * The class name of the referenced ActionReference object.
   */
  static readonly typename: string

  /**
   * Gets reference contained in this reference. Container references provide additional pieces to the reference. This looks like another reference, but it is actually part of the same reference.
   */
  getContainer(): ActionReference

  /**
   * Gets number representing the class of the object.
   */
  getDesiredClass(): number

  /**
   * Gets the enumeration type.
   */
  getEnumeratedType(): number

  /**
   * Gets the enumeration value.
   */
  getEnumeratedValue(): number

  /**
   * Gets the form of this action reference.
   */
  getForm(): ReferenceFormType

  /**
   * Gets the identifier value for reference whose form is identifier.
   */
  getIdentifier(): number

  /**
   * Gets the index value for reference in list or array.
   */
  getIndex(): number

  /**
   * Gets the name of reference.
   */
  getName(): string

  /**
   * Gets the offset of the object's index value.
   */
  getOffset(): number

  /**
   * Gets the property ID value.
   */
  getProperty(): number

  /**
   * Puts new class form and class type into the reference.
   */
  putClass(desiredClass: number): void

  /**
   * Puts an enumeration type and ID into reference along with the desired class for the reference.
   */
  putEnumerated(desiredClass: number, enumType: number, value: number): void

  /**
   * Puts new identifier and value into the reference.
   */
  putIdentifier(desiredClass: number, value: number): void

  /**
   * Puts new index and value into the reference.
   */
  putIndex(desiredClass: number, value: number): void

  /**
   * Puts new name and value into the reference.
   */
  putName(desiredClass: number, value: string): void

  /**
   * Puts new offset and value into the reference.
   */
  putOffset(desiredClass: number, value: number): void

  /**
   * Puts new property and value into the reference.
   */
  putProperty(desiredClass: number, value: number): void
}

/**
 * The Adobe Photoshop application object, which contains all other Adobe Photoshop objects.
 * This is the root of the object model, and provides access to all other objects. To access the properties and methods, you can use the pre-defined global variable app. For example:var currentDoc = app.activeDocument;
 */
declare class Application {
  /**
   * The frontmost document.
   */
  activeDocument: Document

  /**
   * The default background color (used to paint, fill, and stroke selections).
   */
  backgroundColor: SolidColor

  /**
   * The build number of Adobe Photoshop application.
   */
  readonly build: string

  /**
   * The name of the selected color setting's set.
   */
  colorSettings: any

  /**
   * Name of the current tool.
   */
  currentTool: string

  /**
   * The dialog mode for the document, which indicates whether or not Photoshop displays dialogs when the script runs.
   */
  displayDialogs: DialogModes

  /**
   * The collection of open documents.
   */
  readonly documents: Documents

  /**
   * The fonts installed on this system.
   */
  readonly fonts: TextFonts

  /**
   * The default foreground color (used to paint, fill, and stroke selections).
   */
  foregroundColor: SolidColor

  /**
   * The amount of unused memory available to Photoshop.
   */
  readonly freeMemory: number

  /**
   * The language locale of the application.
   */
  readonly locale: string

  /**
   * A list of the image file types Photoshop can open.
   */
  readonly macintoshFileTypes: string[]

  /**
   * The log of measurements taken.
   */
  readonly measurementLog: MeasurementLog

  /**
   * The application name.
   */
  readonly name: string

  /**
   * The notifiers currently configured (in the Scripts Events Manager menu in the application).
   */
  readonly notifiers: Notifiers

  /**
   * If true, notifiers are enabled.
   */
  notifiersEnabled: boolean

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The full path of the location of the Adobe Photoshop application.
   */
  readonly path: File

  /**
   * The dialog mode for playback mode, which indicates whether or not Photoshop displays dialogs in playback mode.
   */
  playbackDisplayDialogs: DialogModes

  /**
   * The playback options, which indicate the speed at which Photoshop plays actions.
   */
  playbackParameters: ActionDescriptor

  /**
   * The application preference settings (equivalent to selecting Edit > Preferences in the Adobe Photoshop application in Windows or Photoshop > Preferences in Mac OS).
   */
  readonly preferences: Preferences

  /**
   * The full path to the preferences folder.
   */
  readonly preferencesFolder: File

  /**
   * Files in the Recent Files list.
   */
  readonly recentFiles: File[]

  /**
   * The build date of the scripting interface.
   */
  readonly scriptingBuildDate: string

  /**
   * The version of the Scripting interface.
   */
  readonly scriptingVersion: string

  /**
   * System information of the host application and machine.
   */
  readonly systemInformation: string

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * The version of Adobe Photoshop application that you are running.
   */
  readonly version: string

  /**
   * A list of the image file extensions Photoshop can open.
   */
  readonly windowsFileTypes: string[]

  /**
   * PRIVATE - set the current tool brush from a file.
   * @param file Brush file to apply.
   */
  applyToolBrushFromFile(file: File): void

  /**
   * Runs the batch automation routine; analogous to using the Batch command in Photoshop.
   * @param inputFiles The files to operate on.
   * @param action The name of the action to play (note that the Action name is case-sensitive and must match the name in the Actions palette).
   * @param from The name of the action set containing the action being played (note that the Action Set name is case-sensitive and must match the name in the Actions palette).
   * @param options Options for batch automation.
   */
  batch(inputFiles: File[], action: string, from: string, options?: BatchOptions): string

  /**
   * Alerts the user.
   */
  beep(): void

  /**
   * Makes Photoshop the active application.
   */
  bringToFront(): void

  /**
   * Changes the text that appears in the progress window.
   * @param progressString String to show in the progress window.
   */
  changeProgressText(progressString: string): void

  /**
   * Converts from a four character code to a runtime ID.
   * @param charID The ID to convert.
   */
  charIDToTypeID(charID: string): number

  /**
   * Plays the specified action from the Actions palette.
   * @param action The name of the action to play. (Note that the action name is case-sensitive and must match the name as it appears in the Actions palette.)
   * @param from The name of the action set containing the action being played. (Note that the Action Set name is case-sensitive and must match the name as it appears in the Actions palette.)
   */
  doAction(action: string, from: string): void

  /**
   * Performs a task with a progress bar. Forces progress bar to display, ignoring the normal heuristics that keep it from showing unnecessarily (e.g. during very short tasks). Other progress APIs must be called periodically to update the progress bar and allow cancelling.
   * @param progressString String to show in the progress window.
   * @param javaScriptString JavaScriptString to execute.
   */
  doForcedProgress(progressString: string, javaScriptString: string): void

  /**
   * Performs a task with a progress bar. Other progress APIs must be called periodically to update the progress bar and allow cancelling.
   * @param progressString String to show in the progress window.
   * @param javaScriptString JavaScriptString to execute.
   */
  doProgress(progressString: string, javaScriptString: string): void

  /**
   * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. Use when iterating a list of tasks with unequal run times.
   * @param segmentLength The length of the current task.
   * @param done The total length of all completed tasks.
   * @param total The total length of all tasks.
   * @param javaScriptString JavaScriptString to execute.
   */
  doProgressSegmentTask(
    segmentLength: number,
    done: number,
    total: number,
    javaScriptString: string,
  ): boolean

  /**
   * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. Use when iterating a simple list of tasks with equal run times.
   * @param index The 0-based index of the current task.
   * @param limit The total number of tasks.
   * @param javaScriptString JavaScriptString to execute.
   */
  doProgressSubTask(index: number, limit: number, javaScriptString: string): boolean

  /**
   * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel.
   * @param taskLength Amount of the unused progress bar to section off, between 0.0 and 1.0.
   * @param javaScriptString JavaScriptString to execute.
   */
  doProgressTask(taskLength: number, javaScriptString: string): boolean

  /**
   * Removes the specified user objects from the Photoshop registry.
   * @param key The unique string ID for user object(s) to remove.
   */
  eraseCustomOptions(key: string): void

  /**
   * Plays an ActionManager event.
   * @param eventID The event to play.
   * @param descriptor The action descriptor to play.
   * @param displayDialogs The display permissions for dialogs and alert messages.
   */
  executeAction(
    eventID: number,
    descriptor?: ActionDescriptor,
    displayDialogs?: DialogModes,
  ): ActionDescriptor

  /**
   * Obtains an action descriptor.
   * @param reference The reference specification of the property.
   */
  executeActionGet(reference: ActionReference): ActionDescriptor

  /**
   * If true, the specified feature is enabled.
   * @param name The name of the feature.
   */
  featureEnabled(name: string): boolean

  /**
   * Retrieves user objects from the Photoshop registry for the ID with value key.
   * @param key The unique string ID for the user object.
   */
  getCustomOptions(key: string): ActionDescriptor

  /**
   * Returns true if Quicktime is installed.
   */
  isQuicktimeAvailable(): boolean

  /**
   * Loads a support document.
   * @param document The document to load.
   */
  load(document: File): void

  /**
   * Creates a contact sheet from multiple files.
   * @param inputFiles The files to include.
   * @param options Options for creating the contact sheet.
   */
  makeContactSheet(inputFiles: File[], options?: ContactSheetOptions): string

  /**
   * Creates a PDF presentation file.
   * @param inputFiles The input files to include in the presentation.
   * @param outputFile The location of the output file.
   * @param options Options for the PDF presentation.
   */
  makePDFPresentation(inputFiles: File[], outputFile: File, options?: PresentationOptions): string

  /**
   * DEPRECATED. Creates a web photo gallery.
   * @param inputFolder Folder to process or an array of files to process.
   * @param outputFolder Location for output files.
   * @param options Options for the web photo gallery.
   */
  makePhotoGallery(inputFolder: any, outputFolder: File, options?: GalleryOptions): string

  /**
   * DEPRECATED. Merges multiple files into one, user interaction required.
   * @param inputFiles List of input files to include.
   */
  makePhotomerge(inputFiles: File[]): string

  /**
   * Creates a picture package from multiple files.
   * @param inputFiles The files to include.
   * @param options Options for creating a Picture Package.
   */
  makePicturePackage(inputFiles: File[], options?: PicturePackageOptions): string

  /**
   * Opens the specified document file(s).
   * @param document The document(s) to opend.
   * @param as The document type (The default is to let Photoshop deduce the format).
   * @param asSmartObject Creates a smart object around the document.
   */
  open(document: File, as?: any, asSmartObject?: boolean): Document

  /**
   * Uses the Photoshop open dialog to select files.
   */
  openDialog(): File[]

  /**
   * Purges one or more caches.
   * @param target The caches to purge.
   */
  purge(target: PurgeTarget): void

  /**
   * Save user objects in the Photoshop registry.
   * @param key The unique string ID for the user object.
   * @param customObject The user-defined custom object to save in the registry.
   * @param persistent If true, the object persists after the script has finished.
   */
  putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void

  /**
   * Pauses the script until the application refreshes.
   */
  refresh(): void

  /**
   * Force the font list to get refreshed.
   */
  refreshFonts(): void

  /**
   * Run a menu item.
   * @param menuID Id of menu to run.
   */
  runMenuItem(menuID: number): void

  /**
   * PRIVATE - save the current tool brush to a file.
   * @param file File to save the brush to.
   */
  saveToolBrushToFile(file: File): void

  /**
   * Display color picker dialog. Returns false if dialog is cancelled, true otherwise.
   * @param pickForeground If true the foreground color is chosen, if false the background color is chosen.
   */
  showColorPicker(pickForeground?: boolean): boolean

  /**
   * Converts from a string ID to a runtime ID.
   * @param stringID The ID to convert.
   */
  stringIDToTypeID(stringID: string): number

  /**
   * Perform a system call.
   * @param callString System call string.
   */
  system(callString: string): number

  /**
   * PRIVATE - write out a thumbnail file from a style file.
   * @param file Style file to read.
   * @param dest Thumb file to write.
   * @param thumbnailSize Size of thumbnail to save.
   * @param backgroundValue Background grayvalue.
   */
  thumbnailStyleFile(file: File, dest: File, thumbnailSize?: number, backgroundValue?: number): void

  /**
   * PRIVATE - write out a thumbnail file from text parameters.
   * @param dest Thumb file to write.
   * @param text Text to render.
   * @param font PostScript name of font.
   * @param size Size of type.
   * @param color Color of type.
   */
  thumbnailText(dest: File, text?: string, font?: string, size?: number, color?: SolidColor): void

  /**
   * Toggle palette visibility.
   */
  togglePalettes(): void

  /**
   * Check if the specified tool supports brushes.
   * @param tool The name of the tool to check.
   */
  toolSupportsBrushes(tool: string): boolean

  /**
   * Converts from a runtime ID to a character ID.
   * @param typeID The ID to convert.
   */
  typeIDToCharID(typeID: number): string

  /**
   * Converts from a runtime ID to a string ID.
   * @param typeID The ID to convert.
   */
  typeIDToStringID(typeID: number): string

  /**
   * Updates the progress bar started by doProgress. Use for manual non-task based progress updating. Returns false on cancel.
   * @param done The number of tasks completed.
   * @param total The total number of tasks.
   */
  updateProgress(done: number, total: number): boolean
}

/**
 * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
 */
declare class Document {
  /**
   * The selected channels.
   */
  activeChannels: Channel[]

  /**
   * The history state to use with the history brush.
   */
  activeHistoryBrushSource: HistoryState

  /**
   * The current history state for this document.
   */
  activeHistoryState: HistoryState

  /**
   * The selected layer.
   */
  activeLayer: Layer

  /**
   * The art layers collection in the document.
   */
  readonly artLayers: ArtLayers

  /**
   * The background layer for the document.
   */
  readonly backgroundLayer: ArtLayer

  /**
   * The number of bits per channel.
   */
  bitsPerChannel: BitsPerChannelType

  /**
   * The channels collection in this document.
   */
  readonly channels: Channels

  /**
   * The name of the color profile. Valid only when no value is specified for color profile kind (to indicate a custom color profile).
   */
  colorProfileName: string

  /**
   * The type of color model that defines the working space of the document.
   */
  colorProfileType: ColorProfileType

  /**
   * The current color samplers associated with the document.
   */
  readonly colorSamplers: ColorSamplers

  /**
   * The color component channels for this document.
   */
  readonly componentChannels: Channel[]

  /**
   * The current count items in the document.
   */
  readonly countItems: CountItems

  /**
   * The full path name of the document.
   */
  readonly fullName: File

  /**
   * The guides in this document.
   */
  readonly guides: Guides

  /**
   * The height of the document.
   */
  readonly height: UnitValue | number

  /**
   * A histogram showing the number of pixels at each color intensity level for the composite channel.
   * Valid only when 'mode' = RGB, CMYK, or indexed.
   */
  readonly histogram: number[]

  /**
   * The history states collection in this document.
   */
  readonly historyStates: HistoryStates

  /**
   * The unique ID of this document.
   */
  readonly id: number

  /**
   * Metadata about the document.
   */
  readonly info: DocumentInfo

  /**
   * The layer comps collection in this document.
   */
  readonly layerComps: LayerComps

  /**
   * The layer sets collection in the document.
   */
  readonly layerSets: LayerSets

  /**
   * The layers collection in the document.
   */
  readonly layers: Layers

  /**
   * If true, the document is a workgroup document.
   */
  readonly managed: boolean

  /**
   * The measurement scale of the document.
   */
  readonly measurementScale: MeasurementScale

  /**
   * The color profile.
   */
  readonly mode: DocumentMode

  /**
   * The document name.
   */
  readonly name: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The path to the document.
   */
  readonly path: Folder

  /**
   * The path items collection in this document.
   */
  readonly pathItems: PathItems

  /**
   * The (custom) pixel aspect ratio of the document. Range: 0.100 to 10.000.
   */
  pixelAspectRatio: number

  /**
   * Document print settings.
   */
  readonly printSettings: DocumentPrintSettings

  /**
   * If true, the document is in Quick Mask mode.
   */
  quickMaskMode: boolean

  /**
   * The resolution of the document (in pixels per inch)
   */
  readonly resolution: number

  /**
   * If true, the document been saved since the last change.
   */
  readonly saved: boolean

  /**
   * The selected area of the document.
   */
  readonly selection: Selection

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * The width of the document.
   */
  readonly width: UnitValue | number

  /**
   * The XMP properties of the document. The Camera RAW settings are stored here.
   */
  readonly xmpMetadata: XMPMetadata

  /**
   * Counts the objects in the document.
   * @param channel The channel to use for counting.
   * @param threshold Threshold to use for counting. Range: 0 to 255.
   */
  autoCount(channel: Channel, threshold: number): void

  /**
   * Changes the mode of the document.
   * @param destinationMode The mode to change to.
   * @param options Options for changing the mode.
   */
  changeMode(destinationMode: ChangeMode, options?: DocumentConversionOptions): void

  /**
   * Closes the document.
   * @param saving Specifies whether changes should be saved before closing.
   */
  close(saving?: SaveOptions): void

  /**
   * Converts the document from using one color profile to using another.
   * @param destinationProfile The color profile to convert to. Either a string specifying a color profile, one of the working color spaces, or Lab color.
   * @param intent The conversion intent.
   * @param blackPointCompensation If true, black point compensation is used.
   * @param dither If true, dither is used.
   */
  convertProfile(
    destinationProfile: string,
    intent: Intent,
    blackPointCompensation?: boolean,
    dither?: boolean,
  ): void

  /**
   * Crops the document.
   * @param bounds The area to crop.
   * @param angle The angle of cropping bounds.
   * @param width The width of the resulting document.
   * @param height The height of the resulting document.
   */
  crop(
    bounds: UnitRect,
    angle?: number,
    width?: UnitValue | number,
    height?: UnitValue | number,
  ): void

  /**
   * Creates a duplicate of the document object.
   * @param name The name of the new document.
   * @param mergeLayersOnly If ture, duplicates merged layers only.
   */
  duplicate(name?: string, mergeLayersOnly?: boolean): Document

  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   */
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): Document

  /**
   * Exports the document.
   * @param exportIn The file to export to.
   * @param exportAs The type of export.
   * @param options Options for the specified export type.
   */
  exportDocument(exportIn: File, exportAs?: ExportType, options?: ExportOptions): void

  /**
   * Flattens all layers.
   */
  flatten(): void

  /**
   * Flips the canvas horizontally or vertically.
   * @param direction The direction in which to flip the canvas.
   */
  flipCanvas(direction: Direction): void

  /**
   * Imports annotations into the document.
   * @param file The document to import annotations from.
   */
  importAnnotations(file: File): void

  /**
   * Flattens all visible layers in the document.
   */
  mergeVisibleLayers(): void

  /**
   * Pastes contents of the clipboard into the document.
   * @param intoSelection If true, contents are pasted into the current selection.
   */
  paste(intoSelection?: boolean): ArtLayer

  /**
   * Prints the document.
   * @param sourceSpace The color space for the source.
   * @param printSpace The color space for the printer. Can be "nothing" (meaning same as source); one of the working spaces or Lab color; or a string specifying a color space. Default: nothing.
   * @param intent The color conversion intent.
   * @param blackPointCompensation If true, black point compensation is used.
   */
  print(
    sourceSpace?: SourceSpaceType,
    printSpace?: string,
    intent?: Intent,
    blackPointCompensation?: boolean,
  ): void

  /**
   * Print one copy of the document.
   */
  printOneCopy(): void

  /**
   * Rasterizes all layers.
   */
  rasterizeAllLayers(): void

  /**
   * Records the measurements of document.
   * @param source The source of the measurements to record.
   * @param dataPoints An array of identifiers of data points to record. Any data points not appropriate for the specified source are ignored.
   */
  recordMeasurements(source?: MeasurementSource, dataPoints?: string[]): void

  /**
   * Changes the size of the canvas.
   * @param width The desired width of the canvas.
   * @param height The desired height of the canvas.
   * @param anchor The anchor point to resize around.
   */
  resizeCanvas(
    width?: UnitValue | number,
    height?: UnitValue | number,
    anchor?: AnchorPosition,
  ): void

  /**
   * Changes the size of the image.
   * @param width The desired width of the image.
   * @param height The desired height of the image.
   * @param resolution The resolution (in pixels per inch)
   * @param resampleMethod The downsample method.
   * @param amount Amount of noise value when using preserve details (range: 0 - 100)
   */
  resizeImage(
    width?: UnitValue | number,
    height?: UnitValue | number,
    resolution?: number,
    resampleMethod?: ResampleMethod,
    amount?: number,
  ): void

  /**
   * Expands the document to show clipped sections.
   */
  revealAll(): void

  /**
   * Rotates the canvas.
   * @param angle The number of degrees to rotate. A positive angle rotates the canvas clockwise; a negative value rotates the canvas counter-clockwise.
   */
  rotateCanvas(angle: number): void

  /**
   * Saves the document.
   */
  save(): void

  /**
   * Saves the document with the specified save options.
   * @param saveIn The file to save to, specified as a string containing the full file path or an alias. If not specified, the document is saved to its existing file.
   * @param options Options for the specified file type.
   * @param asCopy Saves the document as a copy, leaving the original open.
   * @param extensionType Appends the specified extension to the file name.
   */
  saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: Extension): void

  /**
   * Splits the channels of the document.
   */
  splitChannels(): Document[]

  /**
   * Provides a single history state for the entire script. Allows a single undo for all actions taken in the script.
   * @param historyString The string to use for the history state.
   * @param javaScriptString A string of JavaScript code to execute during the suspension of history.
   */
  suspendHistory(historyString: string, javaScriptString: string): void

  /**
   * Applies trapping to a CMYK document. Valid only when 'mode' = CMYK.
   * @param width The trap width in pixels.
   */
  trap(width: number): void

  /**
   * Trims the transparent area around the image on the specified sides of the canvas.
   * @param type The color or type of pixels to base the trim on.
   * @param top If true, trims away the top of the document.
   * @param left If true, trims away the left of the document.
   * @param bottom If true, trims away the bottom of the document.
   * @param right If true, trims away the right of the document.
   */
  trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void
}

/**
 * Metadata about a document object. These values can be set by selecting File > File Info in the Adobe Photoshop application.
 */
declare class DocumentInfo {
  /**
   * The author.
   */
  author: string

  /**
   * The author's position.
   */
  authorPosition: string

  /**
   * The caption.
   */
  caption: string

  /**
   * The caption author.
   */
  captionWriter: string

  /**
   * The document category.
   */
  category: string

  /**
   * The city.
   */
  city: string

  /**
   * The copyright notice.
   */
  copyrightNotice: string

  /**
   * The copyright status.
   */
  copyrighted: CopyrightedType

  /**
   * The country.
   */
  country: string

  /**
   * The creation date.
   */
  creationDate: string

  /**
   * The author credit.
   */
  credit: string

  /**
   * For JPEG images, information stored with digital photographs including camera type, date and time of photo, and file size.
   */
  readonly exif: any[]

  /**
   * The headline.
   */
  headline: string

  /**
   * Instructions for using or processing the image.
   */
  instructions: string

  /**
   * The job name.
   */
  jobName: string

  /**
   * A list of keywords.
   */
  keywords: string[]

  /**
   * The url of the copyright info.
   */
  ownerUrl: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The state or province.
   */
  provinceState: string

  /**
   * The source.
   */
  source: string

  /**
   * Other categories.
   */
  supplementalCategories: string[]

  /**
   * The document title.
   */
  title: string

  /**
   * The transmission reference.
   */
  transmissionReference: string

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * The document urgency.
   */
  urgency: Urgency
}

/**
 * Options to define for the preferences property of the application object, basically equivalent to selecting Edit > Preferences (Windows) or Photoshop > Preferences in the Adobe Photoshop application.
 */
declare class Preferences {
  /**
   * The path to the additional plug-in folder. Valid only when 'use additional plugin folder' = true.
   */
  additionalPluginFolder: File

  /**
   * Save files with extensions on Windows.
   */
  appendExtension: SaveBehavior

  /**
   * If true, asks the user to verify layer preservation options when saving a file in TIFF format.
   */
  askBeforeSavingLayeredTIFF: boolean

  /**
   * If true, automatically updates open documents.
   */
  autoUpdateOpenDocuments: boolean

  /**
   * If true, alerts the user when a process finishes.
   */
  beepWhenDone: boolean

  /**
   * If true, displays component channels in the Channels palette in color.
   */
  colorChannelsInColor: boolean

  /**
   * The color picker to use.
   */
  colorPicker: ColorPicker

  /**
   * The gutter of columns (in points)
   */
  columnGutter: number

  /**
   * The width of columns (in points)
   */
  columnWidth: number

  /**
   * If true, automatically makes the first snapshot when a new document is created.
   */
  createFirstSnapshot: boolean

  /**
   * If true, dynamic color sliders appear in the Color palette.
   */
  dynamicColorSliders: boolean

  /**
   * Options for edit log items.
   */
  editLogItems: EditLogItemsType

  /**
   * If true, retains Adobe Photoshop contents on the clipboard after you exit the application.
   */
  exportClipboard: boolean

  /**
   * Show font previews in the type tool font menus.
   */
  fontPreviewSize: FontPreviewType

  /**
   * If true, shows the image preview as a full size image.
   */
  fullSizePreview: boolean

  /**
   * The opacity (as a percentage) of the warning color for out-of-gamut colors. Range: 0 to 100.
   */
  gamutWarningOpacity: number

  /**
   * The size of grid squares.
   */
  gridSize: GridSize

  /**
   * The formatting style for non-printing grid lines.
   */
  gridStyle: GridLineStyle

  /**
   * The value by which to subdivide the grid.
   */
  gridSubDivisions: number

  /**
   * The formatting style for non-printing guide lines.
   */
  guideStyle: GuideLineStyle

  /**
   * If true, shows the image preview as a thumbnail.
   */
  iconPreview: boolean

  /**
   * If true, shows the current image cache used to create the histogram.
   */
  imageCacheForHistograms: boolean

  /**
   * The number of images to hold in the cache. Range: 1 to 8.
   */
  imageCacheLevels: number

  /**
   * The behavior mode to use when saving files.
   */
  imagePreviews: SaveBehavior

  /**
   * The method to use to assign color values to any new pixels created when an image is resampled or resized.
   */
  interpolation: ResampleMethod

  /**
   * If true, automatically resizes the window when zooming in or out using keyboard shortcuts.
   */
  keyboardZoomResizesWindows: boolean

  /**
   * If true, creates a thumbnail when saving the image in Mac OS.
   */
  macOSThumbnail: boolean

  /**
   * Maximum percentage of available RAM used by Photoshop.
   */
  maxRAMuse: number

  /**
   * The behavior to use to check whether to maximize compatibility when opening Adobe Photoshop (PSD) files.
   */
  maximizeCompatibility: QueryStateType

  /**
   * If true, allows non-linear history.
   */
  nonLinearHistory: boolean

  /**
   * The number of history states to preserve. Range: 1 to 100.
   */
  numberOfHistoryStates: number

  /**
   * The type of pointer to use.
   */
  otherCursors: OtherPaintingCursors

  /**
   * The type of pointer to use.
   */
  paintingCursors: PaintingCursors

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * If true, halves the resolution or (doubles the size of pixels) to make previews display more quickly.
   */
  pixelDoubling: boolean

  /**
   * The point/pica size.
   */
  pointSize: PointType

  /**
   * The number of items in the recent file list. Range: 0 to 30.
   */
  recentFileListLength: number

  /**
   * The unit that the scripting system uses when receiving and returning values.
   */
  rulerUnits: Units

  /**
   * Options for saving the history items.
   */
  saveLogItems: SaveLogItemsType

  /**
   * File to save the history log.
   */
  saveLogItemsFile: File

  /**
   * If true, makes new palette locations the default location.
   */
  savePaletteLocations: boolean

  /**
   * If true, Asian text options are displayed in the Paragraph palette.
   */
  showAsianTextOptions: boolean

  /**
   * If true, Asian font names are listed in English.
   */
  showEnglishFontNames: boolean

  /**
   * If true, displays slice numbers in the document window when using the Slice tool.
   */
  showSliceNumber: boolean

  /**
   * If true, pop-up definitions are displayed on mouseover.
   */
  showToolTips: boolean

  /**
   * If true, curly quote marks are used.
   */
  smartQuotes: boolean

  /**
   * Size of the small font used in panels and dialogs.
   */
  textFontSize: FontSize

  /**
   * The unit type-size that the numeric inputs are assumed to represent.
   */
  typeUnits: TypeUnits

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * If true, uses an additional folder for compatible plug-ins stored with a different application.
   */
  useAdditionalPluginFolder: boolean

  /**
   * If true, uses diffusion dither.
   */
  useDiffusionDither: boolean

  /**
   * Turn on and off the history logging.
   */
  useHistoryLog: boolean

  /**
   * If true, the file extension is lowercase.
   */
  useLowerCaseExtension: boolean

  /**
   * If true, enables cycling through a set of hidden tools.
   */
  useShiftKeyForToolSwitch: boolean

  /**
   * If true, enables Adobe Photoshop to send transparency information to your computer’s video board. (Requires hardware support.)
   */
  useVideoAlpha: boolean

  /**
   * If true, creates a thumbnail when saving the image in Windows. (Requires hardware support.)
   */
  windowsThumbnail: boolean
}

/**
 * Print settings for a document.
 */
declare class DocumentPrintSettings {
  /**
   * Currently selected printer.
   */
  activePrinter: string

  /**
   * Background color of page.
   */
  backgroundColor: SolidColor

  /**
   * Bleed width.
   */
  bleedWidth: UnitValue | number

  /**
   * Description field from File Info.
   */
  caption: boolean

  /**
   * Print center crop marks.
   */
  centerCropMarks: boolean

  /**
   * Print color calibration bars.
   */
  colorBars: boolean

  /**
   * Color handling.
   */
  colorHandling: PrintColorHandling

  /**
   * Number of copies.
   */
  copies: number

  /**
   * Print corner crop marks.
   */
  cornerCropMarks: boolean

  /**
   * Position of image when printing.
   */
  readonly docPosition: DocPositionStyle

  /**
   * Flip the image horizontally.
   */
  flip: boolean

  /**
   * Print a hard proof.
   */
  hardProof: boolean

  /**
   *
   */
  interpolate: boolean

  /**
   * Prints the document title.
   */
  labels: boolean

  /**
   * Map blacks.
   */
  mapBlack: boolean

  /**
   * Invert the image colors.
   */
  negative: boolean

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * X position of image on page.
   */
  readonly posX: UnitValue | number

  /**
   * Y position of image on page.
   */
  readonly posY: UnitValue | number

  /**
   * Width of the print border.
   */
  printBorder: UnitValue | number

  /**
   * Color space for printer. Can be nothing (meaning same as source) or a string specifying a specific color profile.
   */
  printSpace: string

  /**
   * Name of printer.
   */
  printerName: string

  /**
   * List of available printers.
   */
  readonly printers: string[]

  /**
   * Print registration marks.
   */
  registrationMarks: boolean

  /**
   * Color conversion intent when print space is different from the source space.
   */
  renderIntent: Intent

  /**
   * Scale of image on page.
   */
  readonly scale: number

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Include vector data.
   */
  vectorData: boolean

  /**
   * Set the position of the image on the page.
   * @param docPosition Position of the image on page when printing. Can be centered, scale to fit, or user defined.
   * @param posX X position of image on page.
   * @param posY Y position of image on page.
   * @param scale Position of the image on page when printing. Can be centered, scale to fit, or user defined.
   */
  setPagePosition(
    docPosition: DocPositionStyle,
    posX?: UnitValue | number,
    posY?: UnitValue | number,
    scale?: number,
  ): void
}

/**
 * The selected area of the document or layer.
 */
declare class Selection {
  /**
   * The bounding rectangle of the entire selection.
   */
  readonly bounds: UnitRect

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * If true, the bounding rectangle a solid rectangle.
   */
  readonly solid: boolean

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Clears the selection and does not copy it to the clipboard.
   */
  clear(): void

  /**
   * Contracts the selection.
   * @param by The amount to contract the selection.
   */
  contract(by: UnitValue | number): void

  /**
   * Copies the selection to the clipboard.
   * @param merge If true the copy includes all visible layers. If false, copies only from the current layer.
   */
  copy(merge?: boolean): void

  /**
   * Cuts the current selection to the clipboard.
   */
  cut(): void

  /**
   * Deselects the current selection.
   */
  deselect(): void

  /**
   * Expands the selection.
   * @param by The amount to expand the selection.
   */
  expand(by: UnitValue | number): void

  /**
   * Feathers the edges of the selection.
   * @param by The amount to feather the edge.
   */
  feather(by: UnitValue | number): void

  /**
   * Fills the selection.
   * @param fillType The color or history state with which to fill the object.
   * @param mode The color blend mode.
   * @param opacity The opacity as a percentage. Range: 1 to 100.
   * @param preserveTransparency If true, perserves transparencies.
   */
  fill(fillType: any, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void

  /**
   * Grows the selection to include all adjacent pixels falling within the specified tolerance range.
   * @param tolerance The tolerance range. Range: 0 to 255.
   * @param antiAlias If true, anti-aliasing is used.
   */
  grow(tolerance: number, antiAlias: boolean): void

  /**
   * Inverts the selection.
   */
  invert(): void

  /**
   * Loads the selection from the specified channel.
   * @param from The channel to load the selection from.
   * @param combination How to combine the channel contents with the existing selection.
   * @param inverting If true, selects the inverse of the channel contents.
   */
  load(from: Channel, combination?: SelectionType, inverting?: boolean): void

  /**
   * Makes this selection item the workpath for this document.
   * @param tolerance The tolerance in pixels.
   */
  makeWorkPath(tolerance?: number): void

  /**
   * Resizes the selected area to the specified dimensions and anchor position.
   * @param horizontal The amount to scale the selection horizontally (as a percentage).
   * @param vertical The amount to scale the selection vertically (as a percentage).
   * @param anchor The point to scale around.
   */
  resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

  /**
   * Scales the boundary of the selection.
   * @param horizontal The amount to scale the object horizontally (as a percentage).
   * @param vertical The amount to scale the object vertically (as a percentage).
   * @param anchor The point to scale around.
   */
  resizeBoundary(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

  /**
   * Rotates the object.
   * @param angle The number of degrees to rotate the object.
   * @param anchor The point to rotate about.
   */
  rotate(angle: number, anchor?: AnchorPosition): void

  /**
   * Rotates the boundary of the selection.
   * @param angle The rotation angle (in degrees)
   * @param anchor The point to rotate about.
   */
  rotateBoundary(angle: number, anchor?: AnchorPosition): void

  /**
   * Selects the specified region.
   * @param region Array of x and y coordinates that describe the corners of the selection, in the format [[x1, y1], [x2,y2],[x3, y3], [x4,y4]]
   * @param type The method for combining the new selection with the existing selection.
   * @param feather The feather amount.
   * @param antiAlias If true, anti-aliasing is used.
   */
  select(region: any[], type?: SelectionType, feather?: number, antiAlias?: boolean): void

  /**
   * Selects the entire layer.
   */
  selectAll(): void

  /**
   * Selects the selection border only (in the specified width); subsequent actions do not affect the selected area within the borders.
   * @param width The width of the border selection.
   */
  selectBorder(width: UnitValue | number): void

  /**
   * Grows the selection to include pixels throughout the image falling within the tolerance range.
   * @param tolerance The tolerance range. Range: 0 to 255.
   * @param antiAlias If true, anti-aliasing is used.
   */
  similar(tolerance: number, antiAlias: boolean): void

  /**
   * Cleans up stray pixels left inside or outside a color-based selection (within the radius specified in pixels).
   * @param radius The sample radius in pixels. Range: 0 to 100.
   */
  smooth(radius: number): void

  /**
   * Saves the selection as a channel.
   * @param into The channel to save the selection to.
   * @param combination How to add the selection to the existing contents of the channel.
   */
  store(into: Channel, combination?: SelectionType): void

  /**
   * Strokes the selection.
   * @param strokeColor The color to stroke the selection with.
   * @param width The stroke width.
   * @param location The stroke location.
   * @param mode The color blend mode.
   * @param opacity The opacity of the stroke color as a percentage. Range: 1 to 100.
   * @param preserveTransparency If true, preserves transparency.
   */
  stroke(
    strokeColor: any,
    width: number,
    location?: StrokeLocation,
    mode?: ColorBlendMode,
    opacity?: number,
    preserveTransparency?: boolean,
  ): void

  /**
   * Moves the object relative to its current position.
   * @param deltaX The amount to move the object horizontally.
   * @param deltaY The amount to move the object vertically.
   */
  translate(deltaX?: UnitValue | number, deltaY?: UnitValue | number): void

  /**
   * Moves the boundary of selection relative to its current position.
   * @param deltaX The amount to move the object horizontally.
   * @param deltaY The amount to move the object vertically.
   */
  translateBoundary(deltaX?: UnitValue | number, deltaY?: UnitValue | number): void
}

/**
 * A group of layer objects, which can include art layer objects and other (nested) layer set objects. A single command or set of commands manipulates all layers in a layer set object.
 */
declare class LayerSet extends Layer {
  /**
   * The art layers contained in this layer set.
   */
  readonly artLayers: ArtLayers

  /**
   * The channels that are enabled for the layer set. Must be a list of component channels.
   */
  enabledChannels: Channel[]

  /**
   * The layer sets contained within the layer set.
   */
  readonly layerSets: LayerSets

  /**
   * The layers in this layer set.
   */
  readonly layers: Layers

  /**
   * Adds an element.
   */
  add(): LayerSet

  /**
   * Merges the layer set.
   */
  merge(): ArtLayer
}

/**
 * An object within a document that contains the visual elements of the image (equivalent to a layer in the Adobe Photoshop application).
 */
declare class ArtLayer extends Layer {
  /**
   * The interior opacity of the layer. Range: 0.0 to 100.0.
   */
  fillOpacity: number

  /**
   * The density of the filter mask (between 0.0 and 100.0)
   */
  filterMaskDensity: number

  /**
   * The feather of the filter mask (between 0.0 and 250.0)
   */
  filterMaskFeather: number

  /**
   * If true, the layer is grouped with the layer below.
   */
  grouped: boolean

  /**
   * If true, the layer is a background layer.
   */
  isBackgroundLayer: boolean

  /**
   * Sets the layer kind (such as 'text layer') for an empty layer. Valid only when the layer is empty and when 'is background layer ' is false. You can use the 'kind ' property to make a background layer a normal layer; however, to make a layer a background layer, you must set 'is background layer' to true.
   */
  kind: LayerKind

  /**
   * The density of the layer mask (between 0.0 and 100.0)
   */
  layerMaskDensity: number

  /**
   * The feather of the layer mask (between 0.0 and 250.0)
   */
  layerMaskFeather: number

  /**
   * If true, the pixels in the layer's image cannot be edited.
   */
  pixelsLocked: boolean

  /**
   * If true, the pixels in the layer's image cannot be moved within the layer.
   */
  positionLocked: boolean

  /**
   * The text that is associated with the layer. Valid only when 'kind' is text layer.
   */
  readonly textItem: TextItem

  /**
   * If true, editing is confined to the opaque portions of the layer.
   */
  transparentPixelsLocked: boolean

  /**
   * The density of the vector mask (between 0.0 and 100.0)
   */
  vectorMaskDensity: number

  /**
   * The feather of the vector mask (between 0.0 and 250.0)
   */
  vectorMaskFeather: number

  /**
   * Adds an element.
   */
  add(): ArtLayer

  /**
   * Adjusts the brightness and constrast.
   * @param brightness The brightness amount. Range: -100 to 100.
   * @param contrast The contrast amount. Range: -100 to 100.
   */
  adjustBrightnessContrast(brightness: number, contrast: number): void

  /**
   * Adjusts the color balance of the layer's component channels.
   * @param shadows The adjustments for the shadows. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
   * @param midtones The adjustments for the midtones. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
   * @param highlights The adjustments for the highlights. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
   * @param preserveLuminosity If true, luminosity is preserved.
   */
  adjustColorBalance(
    shadows?: number[],
    midtones?: number[],
    highlights?: number[],
    preserveLuminosity?: boolean,
  ): void

  /**
   * Adjusts the tonal range of the selected channel using up to fourteen points.
   * @param curveShape The curve points. The number of points must be between 2 and 14.
   */
  adjustCurves(curveShape: (Point | [number, number])[]): void

  /**
   * Adjusts levels of the selected channels.
   * @param inputRangeStart The input levels minimum. Range: 0 to 253.
   * @param inputRangeEnd The input levels maximum. Range: (input range start + 2) to 253.
   * @param inputRangeGamma The input levels gamma. Range: 0.10 to 9.99.
   * @param outputRangeStart The output levels minimum. Range: 0 to 253.
   * @param outputRangeEnd The output levels maximum. Range: (output range start + 2) to 253.
   */
  adjustLevels(
    inputRangeStart: number,
    inputRangeEnd: number,
    inputRangeGamma: number,
    outputRangeStart: number,
    outputRangeEnd: number,
  ): void

  /**
   * Applies the add noise filter.
   * @param amount The amount of noise (as a percentage). Range: 0.1 to 400.0.
   * @param distribution The noise distribution type.
   * @param monochromatic If true, applies the filter only to the tonal elements in the image without changing the colors.
   */
  applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void

  /**
   * Applies the average filter.
   */
  applyAverage(): void

  /**
   * Applies the blur filter.
   */
  applyBlur(): void

  /**
   * Applies the blur more filter.
   */
  applyBlurMore(): void

  /**
   * Applies the clouds filter.
   */
  applyClouds(): void

  /**
   * Applies the custom filter.
   * @param characteristics The custom filter characteristics. This is an array of 25 values that corresponds to a left-to-right, top-to- bottom traversal of the array presented in the Custom dialog in the user interface (Filter > Other > Custom).
   * @param scale The value by which to divide the sum of the brightness values of the pixels included in the calculation.
   * @param offset The value to be added to the result of the scale calculation.
   */
  applyCustomFilter(characteristics: number[], scale: number, offset: number): void

  /**
   * Applies the de-interlace filter.
   * @param eliminateFields The fields to eliminate.
   * @param createFields The method to use to replace eliminated fields.
   */
  applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void

  /**
   * Applies the despeckle filter.
   */
  applyDespeckle(): void

  /**
   * Applies the difference clouds filter.
   */
  applyDifferenceClouds(): void

  /**
   * Applies the diffuse glow filter.
   * @param graininess The amount of graininess. Range: 0 to 10.
   * @param glowAmount The glow amount. Range: 0 to 20.
   * @param clearAmount The clear amount. Range: 0 to 20.
   */
  applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void

  /**
   * Applies the displace filter.
   * @param horizontalScale The amount of horizontal distortion. Range: -999 to 999.
   * @param verticalScale The amount of vertical distortion. Range: -999 to 999.
   * @param displacementType The displacement type.
   * @param undefinedAreas The treatment of undistorted areas.
   * @param displacementMapFile The distortion image map.
   */
  applyDisplace(
    horizontalScale: number,
    verticalScale: number,
    displacementType: DisplacementMapType,
    undefinedAreas: UndefinedAreas,
    displacementMapFile: File,
  ): void

  /**
   * Applies the dust and scratches filter.
   * @param radius The size (in pixels) of the area searched for dissimilar pixels. Range: 1 to 16.
   * @param threshold Determines how dissimilar the pixels should be before they are eliminated. Range: 0 to 255.
   */
  applyDustAndScratches(radius: number, threshold: number): void

  /**
   * Applies the gaussian blur filter.
   * @param radius The blur width in pixels. Range: 1.0 to 250.0.
   */
  applyGaussianBlur(radius: number): void

  /**
   * Applies the glass filter.
   * @param distortion The amount of distortion. Range: 0 to 20.
   * @param smoothness The smoothness. Range: 1 to 15.
   * @param scaling The amount of scaling. Range: 50 to 200.
   * @param invert If true, the texture is inverted.
   * @param texture The type of texture.
   * @param textureFile The file from which to load the texture type.
   */
  applyGlassEffect(
    distortion: number,
    smoothness: number,
    scaling: number,
    invert?: boolean,
    texture?: TextureType,
    textureFile?: File,
  ): void

  /**
   * Applies the high pass filter.
   * @param radius The width (in pixels) of the radius where edge details are retained.
   */
  applyHighPass(radius: number): void

  /**
   * Apply the lens blur filter.
   * @param source The source for the depth map.
   * @param focalDistance The blur focal distance (in pixels) for the depth map. RangeL 0 to 255. Valid only when 'source' is transparency or layer mask.
   * @param invertDepthMap If true, inverts the depth map.
   * @param shape The shape of the iris.
   * @param radius The radius of the iris. Range: 0 to 100.
   * @param bladeCurvature The blade curvature of the iris. Range: 0 to 100.
   * @param rotation The rotation of the iris (in degrees). Range: 0 to 360.
   * @param brightness The brightness for the specular highlights. Range: 0 to 100.
   * @param threshold The threshold for the specular highlights. Range: 0 to 255.
   * @param amount The amount of noise. Range: 0 to 100.
   * @param distribution The distribution value for the noise.
   * @param monochromatic If true, the noise is monochromatic.
   */
  applyLensBlur(
    source?: DepthMapSource,
    focalDistance?: number,
    invertDepthMap?: boolean,
    shape?: Geometry,
    radius?: number,
    bladeCurvature?: number,
    rotation?: number,
    brightness?: number,
    threshold?: number,
    amount?: number,
    distribution?: NoiseDistribution,
    monochromatic?: boolean,
  ): void

  /**
   * Applies the lens flare filter.
   * @param brightness The flare brightness. Range: 10 to 300.
   * @param flareCenter The position of the flare center.
   * @param lensType The lens type.
   */
  applyLensFlare(brightness: number, flareCenter: UnitPoint, lensType: LensType): void

  /**
   * Applies the maximum filter.
   * @param radius The choke area (in pixels). Range: 0 to 100.
   */
  applyMaximum(radius: number): void

  /**
   * Applies the median noise filter.
   * @param radius The size of the area searched for pixels of similar brightness. Range: 0 to 100.
   */
  applyMedianNoise(radius: number): void

  /**
   * Applies the minimum filter.
   * @param radius The spread area (in pixels). Range: 0 to 100.
   */
  applyMinimum(radius: number): void

  /**
   * Applies the motion blur filter.
   * @param angle The angle (in degrees). Range: -360 to 360.
   * @param radius The radius (in pixels). Range: 1 to 999.
   */
  applyMotionBlur(angle: number, radius: number): void

  /**
   * Applies the NTSC colors filter.
   */
  applyNTSC(): void

  /**
   * Applies the ocean ripple filter.
   * @param size The ripple size. Range: 1 to 15.
   * @param magnitude The ripple magnitude. Range: 0 to 20.
   */
  applyOceanRipple(size: number, magnitude: number): void

  /**
   * Applies the offset filter.
   * @param horizontal The amount (in pixels) to move the selection horizontally (to the right). Range: -6144 to 6144.
   * @param vertical The amount (in pixels) to move the selection vertically (downward). Range: -6144 to 6144.
   * @param undefinedAreas The method for filling areas left blank by the offset.
   */
  applyOffset(
    horizontal: UnitValue | number,
    vertical: UnitValue | number,
    undefinedAreas: OffsetUndefinedAreas,
  ): void

  /**
   * Applies the pinch filter.
   * @param amount The pinch amount. Range: -100 to 100.
   */
  applyPinch(amount: number): void

  /**
   * Applies the polar coordinates filter.
   * @param conversion The conversion type.
   */
  applyPolarCoordinates(conversion: PolarConversionType): void

  /**
   * Applies the radial blur filter.
   * @param amount The amount of blur. Range: 1 to 100.
   * @param blurMethod The blur method to use.
   * @param blurQuality The smoothness or graininess of the blurred image.
   * @param blurCenter Position (unit value)
   */
  applyRadialBlur(
    amount: number,
    blurMethod: RadialBlurMethod,
    blurQuality: RadialBlurQuality,
    blurCenter?: UnitPoint,
  ): void

  /**
   * Applies the ripple filter.
   * @param amount The ripple amount. Range: -999 to 999.
   * @param size The ripple size.
   */
  applyRipple(amount: number, size: RippleSize): void

  /**
   * Applies the sharpen filter.
   */
  applySharpen(): void

  /**
   * Applies the sharpen edges filter.
   */
  applySharpenEdges(): void

  /**
   * Applies the sharpen more filter.
   */
  applySharpenMore(): void

  /**
   * Applies the shear filter.
   * @param curve Specification of the shear curve in points as x,y coordinate pairs in the format [[x1, y1],[x2, y2]]. Any number of coordinate pairs can be specified.
   * @param undefinedAreas The treatment of areas left blank by the distortion.
   */
  applyShear(curve: any[], undefinedAreas: UndefinedAreas): void

  /**
   * Applies the smart blur filter.
   * @param radius The blur radius. Range: 0 - 1000.
   * @param threshold The blur threshold. Range: 0 - 1000.
   * @param blurQuality The smoothness or graininess of the blurred image.
   * @param mode The smart blur mode.
   */
  applySmartBlur(
    radius: number,
    threshold: number,
    blurQuality: SmartBlurQuality,
    mode: SmartBlurMode,
  ): void

  /**
   * Applies the spherize filter.
   * @param amount The amount of distortion. Range: -100 to 100.
   * @param mode The distortion mode.
   */
  applySpherize(amount: number, mode: SpherizeMode): void

  /**
   * Applies the specified style to the layer.
   * @param styleName The layer style to apply.
   */
  applyStyle(styleName: string): void

  /**
   *
   * @param file Style file to apply.
   */
  applyStyleFile(file: File): void

  /**
   * Applies the texture fill filter.
   * @param textureFile The texture file. Must be a grayscale Photoshop file.
   */
  applyTextureFill(textureFile: File): void

  /**
   * Applies the twirl filter.
   * @param angle The twirl angle. Range: -999 to 999.
   */
  applyTwirl(angle: number): void

  /**
   * Applies the unsharp mask filter.
   * @param amount The amount of sharpening (as a percentage). Range: 1 to 500.
   * @param radius The radius in pixels. Range: 0.1 to 250.0.
   * @param threshold The contrast threshold. Range: 0 to 255.
   */
  applyUnSharpMask(amount: number, radius: number, threshold: number): void

  /**
   * Applies the wave filter.
   * @param generatorNumber The number of generators. Range: 1 to 999.
   * @param minimumWavelength The minimum wave length. Range: 1 to 998.
   * @param maximumWavelength The maximum wave length. Range: 2 to (minimum wavelength + 1)
   * @param minimumAmplitude The minimum amplitude. Range: 1 to 998.
   * @param maximumAmplitude The maximum amplitude. Range: 2 to (minimum amplitude + 1)
   * @param horizontalScale The amount of horizontal scale (as a percentage). Range: 1 to 100.
   * @param verticalScale The amount of vertical scale (as a percentage). Range: 1 to 100.
   * @param waveType The wave type.
   * @param undefinedAreas The treatment of areas left blank by the distortion.
   * @param randomSeed The random seed.
   */
  applyWave(
    generatorNumber: number,
    minimumWavelength: number,
    maximumWavelength: number,
    minimumAmplitude: number,
    maximumAmplitude: number,
    horizontalScale: number,
    verticalScale: number,
    waveType: WaveType,
    undefinedAreas: UndefinedAreas,
    randomSeed: number,
  ): void

  /**
   * Applies the zigzag filter.
   * @param amount The amount of zigzag. Range: -100 to 100.
   * @param ridges The ridge length.
   * @param style The zigzag style.
   */
  applyZigZag(amount: number, ridges: number, style: ZigZagType): void

  /**
   * Adjusts the contrast of the selected channels automatically.
   */
  autoContrast(): void

  /**
   * Adjust the levels of the selected channels using the auto levels option.
   */
  autoLevels(): void

  /**
   * Cuts the layer without moving it to the clipboard.
   */
  clear(): void

  /**
   * Copies the layer to the clipboard.
   * @param merge If true, the copy includes all visible layers. If false, the copy only copies from the current layer.
   */
  copy(merge?: boolean): void

  /**
   * Cuts the layer to the clipboard.
   */
  cut(): void

  /**
   * Converts a color image to a grayscale image in the current color mode by assigning equal values of each component color to each pixel.
   */
  desaturate(): void

  /**
   * Redistributes the brightness values of pixels in an image to more evenly represent the entire range of brightness levels within the image.
   */
  equalize(): void

  /**
   * Inverts the colors in the layer by converting the brightness value of each pixel in the channels to the inverse value on the 256-step color-values scale.
   */
  invert(): void

  /**
   * Merges the layer down, removing the layer from the document. Returns a reference to the art layer that this layer is merged into.
   */
  merge(): ArtLayer

  /**
   * Modifies a targeted (output) color channel using a mix of the existing color channels in the image. (output channels = An array of channel specifications. For each component channel, specify a list of adjustment values (-200 to 200) followed by a 'constant' value (-200 to 200).) When monochrome = true, the maximum number of channel value specifications is 1. Valid only when 'document mode' = RGB or CMYK. RGB arrays must include four doubles. CMYK arrays must include five doubles.
   * @param outputChannels A list of channel specifications. For each component channel that the document has, you must specify a list of adjustment values followed by a 'constant' value.
   * @param monochrome If true, uses monochrome mixing. Note: If this is true, you can only specify one channel value.
   */
  mixChannels(outputChannels: any[], monochrome?: boolean): void

  /**
   * Adjusts the layer's color balance and temperature as if a color filter had been applied.
   * @param fillColor The color to use for the fill.
   * @param density The density (as a percentage) of the filter effect. Range: 1 to 100.
   * @param preserveLuminosity If true, luminosity is preserved.
   */
  photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void

  /**
   * Specifies the number of tonal levels for each channel and then maps pixels to the closest matching level.
   * @param levels The tonal levels. Range: 2 to 255.
   */
  posterize(levels: number): void

  /**
   * Converts the targeted content in the layer into a flat, raster image.
   * @param target What to rasterize.
   */
  rasterize(target: RasterizeType): void

  /**
   *
   * @param file File to save the style to.
   * @param thumbnail File to save the style thumbnail to.
   * @param thumbnailSize Size of thumbnail to save.
   * @param backgroundValue Background grayvalue.
   */
  saveStyleFile(
    file: File,
    thumbnail?: File,
    thumbnailSize?: number,
    backgroundValue?: number,
  ): void

  /**
   *
   * @param selectionMethod Modifies the amount of a process color in a specified primary color without affecting the other primary colors.
   * @param reds Array of 4 values: cyan, magenta, yellow, black.
   * @param yellows Array of 4 values: cyan, magenta, yellow, black.
   * @param greens Array of 4 values: cyan, magenta, yellow, black.
   * @param cyans Array of 4 values: cyan, magenta, yellow, black.
   * @param blues Array of 4 values: cyan, magenta, yellow, black.
   * @param magentas Array of 4 values: cyan, magenta, yellow, black.
   * @param whites Array of 4 values: cyan, magenta, yellow, black.
   * @param neutrals Array of 4 values: cyan, magenta, yellow, black.
   * @param blacks Array of 4 values: cyan, magenta, yellow, black.
   */
  selectiveColor(
    selectionMethod: AdjustmentReference,
    reds?: number[],
    yellows?: number[],
    greens?: number[],
    cyans?: number[],
    blues?: number[],
    magentas?: number[],
    whites?: number[],
    neutrals?: number[],
    blacks?: number[],
  ): void

  /**
   * Adjusts the range of tones in the shadows and highlights.
   * @param shadowAmount The shadow amount, as a percentage. Range: 0 to 100.
   * @param shadowWidth The shadow width, as a percentage. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad).
   * @param shadowRaduis The shadow radius (in pixels). Range: 0 to 2500.
   * @param highlightAmount The highlight amount, as a percentage. Range: 0 to 100.
   * @param highlightWidth The highlight width. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad).
   * @param highlightRaduis The highlight radius (in pixels). Range: 0 to 2500.
   * @param colorCorrection The amount to adjust the colors in the changed portion of the image. Range: -100 to 100.
   * @param midtoneContrast The amount of midtone contrast. Range: -100 to 100.
   * @param blackClip Fractions of whites to be clipped. Range: 0.000 to 50.000.
   * @param whiteClip Fractions of blacks to be clipped. Range: 0.000 to 50.000.
   */
  shadowHighlight(
    shadowAmount?: number,
    shadowWidth?: number,
    shadowRaduis?: number,
    highlightAmount?: number,
    highlightWidth?: number,
    highlightRaduis?: number,
    colorCorrection?: number,
    midtoneContrast?: number,
    blackClip?: number,
    whiteClip?: number,
  ): void

  /**
   * Converts grayscale or color images to high-contrast, B/W images by converting pixels lighter than the specified threshold to white and pixels darker than the threshold to black.
   * @param level The threshold level.
   */
  threshold(level: number): void
}

/**
 * A layer object.
 * Layers may contain nested layers, which are called sublayers in the user interface. The layer object contains all of the page items in the specific layer as elements. Your script can access page items as elements of either the layer object or the document object.
 */
declare class Layer {
  /**
   * If true, the layer's contents and settings are locked.
   */
  allLocked: boolean

  /**
   * The mode to use when compositing an object.
   */
  blendMode: BlendMode

  /**
   * If the Layer is a layer set, this property returns a reference to the corresponding layer set object.
   */
  readonly bounds: UnitRect

  /**
   * Bounding rectangle of the Layer not including effects.
   */
  readonly boundsNoEffects: UnitRect

  /**
   * The unique ID of this layer.
   */
  readonly id: number

  /**
   * The layer index sans layer groups, how Photoshop would index them.
   */
  readonly itemIndex: number

  /**
   * The layers linked to this layer.
   */
  readonly linkedLayers: Layer[]

  /**
   * The name of the layer.
   */
  name: string

  /**
   * The layer's master opacity (as a percentage). Range: 0.0 to 100.0.
   */
  opacity: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * If true, the layer is visible.
   */
  visible: boolean

  /**
   * XMP metadata associated with the Layer.
   */
  readonly xmpMetadata: XMPMetadata

  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   */
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): Layer

  /**
   * Links the layer with the specified layer.
   * @param with_ The layer to link to.
   */
  link(with_: Layer): void

  /**
   * Move the object.
   * @param relativeObject
   * @param insertionLocation
   */
  move(relativeObject: object, insertionLocation: ElementPlacement): Layer

  /**
   * ...
   * @param layerSet
   */
  moveToEnd(layerSet?: LayerSet): void

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void

  /**
   * Scales the object.
   * @param horizontal The amount to scale the object horizontally (as a percentage).
   * @param vertical The amount to scale the object vertically (as a percentage).
   * @param anchor The point to resize about.
   */
  resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

  /**
   * Rotates the object.
   * @param angle The number of degrees to rotate the object.
   * @param anchor The point to rotate about.
   */
  rotate(angle: number, anchor?: AnchorPosition): void

  /**
   * Moves the object relative to its current position.
   * @param deltaX The amount to move the object horizontally.
   * @param deltaY The amount to move the object vertically.
   */
  translate(deltaX?: UnitValue | number, deltaY?: UnitValue | number): void

  /**
   * Unlinks the layer.
   */
  unlink(): void
}

/**
 * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document's color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
 */
declare class Channel {
  /**
   * The color of the channel. Not valid for component channels.
   */
  color: SolidColor

  /**
   * A histogram of the color of the channel.
   */
  readonly histogram: number[]

  /**
   * The type of channel.
   */
  kind: ChannelType

  /**
   * The channel name.
   */
  name: string

  /**
   * The opacity of alpha channels (called solidity for spot channels). Range: 0 to 100. Valid only when 'type' = masked area or selected area.
   */
  opacity: number

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * If true, the channel is visible.
   */
  visible: boolean

  /**
   * Adds an element.
   */
  add(): Channel

  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   */
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): Channel

  /**
   * Duplicates the channel.
   * @param targetDocument The document to duplicate the channel to.
   */
  duplicate(targetDocument?: Document): Channel

  /**
   * Merges a spot channel into the component channels.
   */
  merge(): void

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * A guide in the document.
 */
declare class Guide {
  /**
   * Location of the guide from origin of image.
   */
  coordinate: UnitValue | number

  /**
   * Indicates whether the guide is vertical or horizontal.
   */
  direction: Direction

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * A version of the document stored automatically (and added to the history states collection, which preserves the document state each time the document is changed).
 */
declare class HistoryState {
  /**
   * The history state name.
   */
  readonly name: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * If true, the history state is a snapshot.
   */
  readonly snapshot: boolean

  /**
   * The class name of the object.
   */
  readonly typename: string
}

/**
 * An installed font.
 */
declare class TextFont {
  /**
   * The font family.
   */
  readonly family: string

  /**
   * The font name.
   */
  readonly name: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The PostScript name of the font.
   */
  readonly postScriptName: string

  /**
   * The font style.
   */
  readonly style: string

  /**
   * The class name of the object.
   */
  readonly typename: string
}

/**
 * The text object contained in an art layer.
 */
declare class TextItem {
  /**
   * If true, alternate ligatures are used.
   */
  alternateLigatures: boolean

  /**
   * The method of anti-aliasing to use.
   */
  antiAliasMethod: AntiAlias

  /**
   * Options for auto kerning.
   */
  autoKerning: AutoKernType

  /**
   * The percentage to use for auto leading. Range: 0.01 to 5000.00.
   */
  autoLeadingAmount: number

  /**
   * The amount of baseline offset of text.
   */
  baselineShift: UnitValue | number

  /**
   * The case of the text.
   */
  capitalization: Case

  /**
   * The text color.
   */
  color: SolidColor

  /**
   * The actual text in the layer.
   */
  contents: string

  /**
   * The desired amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
   */
  desiredGlyphScaling: number

  /**
   * The amount of space (as a percentage) between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text.
   */
  desiredLetterScaling: number

  /**
   * The amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text.
   */
  desiredWordScaling: number

  /**
   * The text orientation.
   */
  direction: Direction

  /**
   * If true, faux bold is used.
   */
  fauxBold: boolean

  /**
   * If true, faux italic is used.
   */
  fauxItalic: boolean

  /**
   * The amount to indent the first line of paragraphs. Range: -1296 to 1296.
   */
  firstLineIndent: UnitValue | number

  /**
   * The text face of the character.
   */
  font: string

  /**
   * If true, uses Roman hanging punctuation.
   */
  hangingPuntuation: boolean

  /**
   * The height of the bounding box for paragraph text.
   */
  height: UnitValue | number

  /**
   * Character scaling (horizontal) in proportion to horizontal scale. Range: 0 - 1000 as a percentage.
   */
  horizontalScale: number

  /**
   * The maximum number of consecutive lines that can end with a hyphenated word.
   */
  hyphenLimit: number

  /**
   * The number of letters after which hyphenation in word wrap is allowed. Range: 1 to 15.
   */
  hyphenateAfterFirst: number

  /**
   * The number of letters before which hyphenation in word wrap is allowed. Range: 1 to 15.
   */
  hyphenateBeforeLast: number

  /**
   * If true, capitalized words can be hyphenated.
   */
  hyphenateCapitalWords: boolean

  /**
   * The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed. Range: 2 to 25.
   */
  hyphenateWordsLongerThan: number

  /**
   * If true, hyphenation is used.
   */
  hyphenation: boolean

  /**
   * The distance at the end of a line that will cause a word to break in unjustified type. Range: 0 - 720 picas.
   */
  hyphenationZone: UnitValue | number

  /**
   * The paragraph justification.
   */
  justification: Justification

  /**
   * The type of text.
   */
  kind: TextType

  /**
   * The language.
   */
  language: Language

  /**
   * The leading amount.
   */
  leading: UnitValue | number

  /**
   * The amount to indent text from the left. Range: -1296 to 1296.
   */
  leftIndent: UnitValue | number

  /**
   * If true, ligatures are used.
   */
  ligatures: boolean

  /**
   * The maximum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
   */
  maximumGlyphScaling: number

  /**
   * The maximum amount (as a percentage) of space between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text.
   */
  maximumLetterScaling: number

  /**
   * The maximum amount (as a percentage) of space between words (0 -1000; at 100, no additional space is added between words). Valid only for justified text.
   */
  maximumWordScaling: number

  /**
   * The minimum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text.
   */
  minimumGlyphScaling: number

  /**
   * The minimum amount of space (as a percentage) between letters. Range: 100 to 500; at 0, no space is added between letters. Valid only for justified text.
   */
  minimumLetterScaling: number

  /**
   * The minimum amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text.
   */
  minimumWordScaling: number

  /**
   * If true, words are not allowed to break at the end of a line. When enacted on large amounts of consecutive characters, can prevent word wrap and thus may prevent some text from appearing on the screen.
   */
  noBreak: boolean

  /**
   * If true, old style is used.
   */
  oldStyle: boolean

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The position of the origin for the text. The array must contain two values. Setting this property is basically equivalent to clicking the text tool at a point in the document to create the point of origin for text.
   */
  position: UnitPoint

  /**
   * The amount to indent text from the right. Range: -1296 to 1296.
   */
  rightIndent: UnitValue | number

  /**
   * The font size in points.
   */
  size: UnitValue | number

  /**
   * The amount of space after each paragraph. Range: -1296 to 1296.
   */
  spaceAfter: UnitValue | number

  /**
   * The amount of space before each paragraph. Range: -1296 to 1296.
   */
  spaceBefore: UnitValue | number

  /**
   * The strike through option to use.
   */
  strikeThru: StrikeThruType

  /**
   * The text composing engine to use.
   */
  textComposer: TextComposer

  /**
   * The amount of uniform spacing between multiple characters. Range: -1000 to 10000.
   */
  tracking: number

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Options for underlining the text.
   */
  underline: UnderlineType

  /**
   * If true, uses the font's built-in leading information.
   */
  useAutoLeading: boolean

  /**
   * Character scaling (vertical) in proportion to horizontal scale. Range: 0 - 1000 as a percentage.
   */
  verticalScale: number

  /**
   * The warp bend percentage. Range: -100 to 100.
   */
  warpBend: number

  /**
   * The warp direction.
   */
  warpDirection: Direction

  /**
   * The warp horizontal distortion percentage. Range: -100 to 100.
   */
  warpHorizontalDistortion: number

  /**
   * The style of warp.
   */
  warpStyle: WarpStyle

  /**
   * The warp vertical distortion percentage. Range: -100 to 100.
   */
  warpVerticalDistortion: number

  /**
   * The width of the bounding box for paragraph text.
   */
  width: UnitValue | number

  /**
   * Converts the text object and its containing layer to a fill layer with the text changed to a clipping path.
   */
  convertToShape(): void

  /**
   * Creates a clipping path from the outlines of the actual text items (such as letters or words).
   */
  createPath(): void
}

/**
 * A snapshot of a state of the layers in a document (can be used to view different page layouts or compostions).
 */
declare class LayerComp {
  /**
   * If true, uses layer appearance (layer styles) settings.
   */
  appearance: boolean

  /**
   * The description of the layer comp.
   */
  comment: any

  /**
   * The name of the layer comp.
   */
  name: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * If true, uses layer position.
   */
  position: boolean

  /**
   * If true, the layer comp is currently selected.
   */
  readonly selected: boolean

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * If true, the layer comp is visible.
   */
  visibility: boolean

  /**
   * Adds an element.
   */
  add(): LayerComp

  /**
   * Applies the layer comp to the document.
   */
  apply(): void

  /**
   * Recaptures the current layer state(s) for this layer comp.
   */
  recapture(): void

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void

  /**
   * Resets the layer comp state to the document state.
   */
  resetFromComp(): void
}

/**
 * A path or drawing object, such as the outline of a shape or a straight or curved line, which contains sub paths that comprise its geometry.
 */
declare class PathItem {
  /**
   * The type of path.
   */
  kind: PathKind

  /**
   * The name of the path item.
   */
  name: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The sub path objects for this path item.
   */
  readonly subPathItems: SubPathItems

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Adds an element.
   */
  add(): PathItem

  /**
   * Unselects the selection, no path items are selected.
   */
  deselect(): void

  /**
   * Duplicate this object.
   * @param relativeObject
   * @param insertionLocation
   */
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): PathItem

  /**
   * Duplicates this path item.
   * @param name The name for the new path.
   */
  duplicate(name?: string): PathItem

  /**
   * Fills the area enclosed by the path.
   * @param fillColor The color of the fill for this path.
   * @param mode The blending mode of the fill for this path.
   * @param opacity The opacity of the fill for this path (as a percentage). Range: 0.0 to 100.0.
   * @param preserveTransparency If true, transparency is preserved.
   * @param feather The feather amount in pixels. Range: 0.0 to 250.0.
   * @param antiAlias If true, uses anti-aliasing for the selection.
   * @param wholePath If true, uses all subpaths when doing the fill.
   */
  fillPath(
    fillColor?: any,
    mode?: ColorBlendMode,
    opacity?: number,
    preserveTransparency?: boolean,
    feather?: number,
    antiAlias?: boolean,
    wholePath?: boolean,
  ): void

  /**
   * Makes this path item the clipping path for this document.
   * @param flatness Flatness in device pixels; tells the PostScript printer how to approximate curves. Range: 0.2 to 100).
   */
  makeClippingPath(flatness?: number): void

  /**
   * Makes a selection object, whose border is the path, from this path item object.
   * @param feather The feather amount in pixels. Range: 0.0 to 250.0.
   * @param antiAlias If true, the selection uses anti-aliasing.
   * @param operation The selection behavior relative to the existing selection (when a selection already exists).
   */
  makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void

  /**
   * Makes this path item the active or selected path item.
   */
  select(): void

  /**
   * Strokes the path.
   * @param tool The tool to use when stroking the path.
   * @param simulatePressure If true, simulates the pressure when using the tool.
   */
  strokePath(tool?: ToolType, simulatePressure?: boolean): void
}

/**
 * Information about a path. You do not use the sub path item object to create a path. Rather, you create path segments using the sub path info object. Use the sub path item object to retrieve information about a path. All properties are read-only.
 */
declare class SubPathItem {
  /**
   * If true, the path is closed.
   */
  readonly closed: boolean

  /**
   * The sub path operation on other sub paths.
   */
  readonly operation: ShapeOperation

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The path points collection in the sub path.
   */
  readonly pathPoints: PathPoints

  /**
   * The class name of the object.
   */
  readonly typename: string
}

/**
 * Information about an array of path point info objects. You do not use the path point object to create points that make up a path. Rather, you use the path point object to retrieve information about the points that describe path segments. To create path points, use the path point info object.
 */
declare class PathPoint {
  /**
   * The position (coordinates) of the anchor point.
   */
  readonly anchor: Point | [number, number]

  /**
   * The type of point.
   */
  readonly kind: PointKind

  /**
   * The location of the left direction point (the "in" position).
   */
  readonly leftDirection: Point | [number, number]

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The location of the right direction point (the "out" position).
   */
  readonly rightDirection: Point | [number, number]

  /**
   * The class name of the object.
   */
  readonly typename: string
}

/**
 * The log of measurements taken.
 */
declare class MeasurementLog {
  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Deletes the specified measurements.
   * @param range The measurements to delete. Default: selected.
   */
  deleteMeasurements(range?: MeasurementRange): void

  /**
   * Exports the specified measurements.
   * @param file The file to export to. If not specified, a 'file save' dialog is displayed.
   * @param range The measurements to export. Default: selected.
   * @param dataPoints An array of identifiers of data points to export. The order of the data points is respected in the exported file. Defaults to data points visible in Measurement Log palette.
   */
  exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string[]): void
}

/**
 * The measurement scale for the document.
 */
declare class MeasurementScale {
  /**
   * The logical length this scale equates to.
   */
  logicalLength: number

  /**
   * The logical units for this scale.
   */
  logicalUnits: string

  /**
   * The name of the scale.
   */
  name: string

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The length (in pixels) to which this scale equates.
   */
  pixelLength: number

  /**
   * The class name of the object.
   */
  readonly typename: string
}

/**
 * An event-handler object that tells the script to execute specified code when a specified event occurs. For notifiers to work, they must be enabled. See the 'notifiers enabled' property of the Application object. Events that occur within scripts do not generally trigger notifiers, because they occur inside of a "play script" event.
 */
declare class Notifier {
  /**
   * The event ID in four characters or a unique string that the notifier is associated with.
   */
  readonly event: string

  /**
   * The class ID associated with the event for the Notifier object, four characters or a unique string.
   */
  readonly eventClass: string

  /**
   * The path to the file to execute when the event occurs/activates the notifier.
   */
  readonly eventFile: File

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * A counted item in the document. The count item feature is available in the Extended Version only.
 */
declare class CountItem {
  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The position of count item in the document.
   */
  readonly position: UnitPoint

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Adds an element.
   */
  add(): CountItem

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * A color sampler in a document.
 */
declare class ColorSampler {
  /**
   * The color of the color sampler.
   */
  readonly color: SolidColor

  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The position of the color sampler in the document.
   */
  readonly position: UnitPoint

  /**
   * The class name of the object.
   */
  readonly typename: string

  /**
   * Adds an element.
   */
  add(): ColorSampler

  /**
   * Moves the color sampler to a new location.
   * @param position Position of destination (unit value)
   */
  move(position: UnitPoint): void

  /**
   * Deletes this object.
   */
  remove(): void

  /**
   * Deletes all elements.
   */
  removeAll(): void
}

/**
 * Camera raw image file settings stored in an XMP file in the same folder as the raw file with the same base name and an XMP extension.
 */
declare class XMPMetadata {
  /**
   * The object's container.
   */
  readonly parent: object

  /**
   * The raw XML form of file information.
   */
  rawData: string

  /**
   * The class name of the object.
   */
  readonly typename: string
}

/**
 * Describes a rectangle. This class is also a four-element collection.
 */
declare class Rectangle {
  /**
   * The bottom coordinate.
   */
  bottom: number

  /**
   * The height.
   */
  height: number

  /**
   * The left coordinate.
   */
  left: number

  /**
   * The array length.
   */
  readonly length: number

  /**
   * The right coordinate.
   */
  right: number

  /**
   * The top coordinate.
   */
  top: number

  /**
   * The width.
   */
  width: number

  /**
   * The left coordinate.
   */
  x: number

  /**
   * The top coordinate.
   */
  y: number
}

/**
 * Controls where Photoshop places an element.
 */
declare enum ElementPlacement {
  /**
   * Place after an element.
   */
  PLACEAFTER = 1,

  /**
   * Place an element at the end.
   */
  PLACEATEND = 3,

  /**
   * Place before an element.
   */
  PLACEBEFORE = 2,
}

type UnitPoint = [UnitValue | number, UnitValue | number]
type UnitRect = [UnitValue | number, UnitValue | number, UnitValue | number, UnitValue | number]


// ________________________________________________________________________________
// ________________________________________________________________________________


