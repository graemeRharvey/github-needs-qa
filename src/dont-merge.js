const event = require('./actions');
const utils = require('./utils');

function handleRequestLabels (robot, context) {
  robot.on(event.actions, async context => {
    const {labels, head} = context.payload.pull_request;
    const hasDontMergeLabel = labels.some(label => utils.isDontMerge(label.name));
    const state = hasDontMergeLabel ? 'failure' : 'success';
    const description = hasDontMergeLabel ? 'Please QA before merging!' : 'QA good to go!';

    context.github.repos.createStatus(context.repo({
      sha: head.sha,
      target_url: 'https://github.com/apps/block-on-qa',
      context: 'Block on QA',
      state,
      description
    }));
  });
}

module.exports = handleRequestLabels;
