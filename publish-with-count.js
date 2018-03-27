import { Meteor } from 'meteor/meteor';

Meteor.publishWithCount = (name, method, postfix = ".count") => {
	const countName = name + postfix;

	// Main subscription
	Meteor.publish(name, method);

	// Method to get count
	const methods = {};
	methods[countName] = (...args) => {
		const count = method(...args).count({ applySkipLimit: false });
		return count;
	};
	Meteor.methods(methods);
};