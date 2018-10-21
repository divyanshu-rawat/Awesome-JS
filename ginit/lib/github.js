const octokit = require('@octokit/rest')();
const Configstore = require('configstore');
const pkg = require('../package.json');
const _ = require('lodash');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const chalk = require('chalk');

const inquirer = require('./inquirer');
const conf = new Configstore(pkg.name);


module.exports = {

    getInstance: () => {
        return octokit;
    },

    getStoredGithubToken: () => {
        return conf.get('github.token');
    },

    setGithubCredentials: async () => {
        const credentials = await inquirer.askGithubCredentials();
        octokit.authenticate(
            _.extend(
                {
                    type: 'basic',
                },
                credentials
            )
        );
    },

    registerNewToken: async () => {
        const status = new Spinner('Authenticating you, please wait...');
        status.start();

        try {
            const response = await octokit.authorization.create({
                scopes: ['user', 'public_repo', 'repo', 'repo:status'],
                note: 'ginits, the command-line tool for initalizing Git repos'
            });
            const token = response.data.token;
            if (token) {
                conf.set('github.token', token);
                return token;
            } else {
                throw new Error("Missing Token", "GitHub token was not found in the response");
            }
        } catch (err) {
            throw err;
        } finally {
            status.stop();
        }
    },

    githubAuth: (token) => {
        octokit.authenticate({
            type: 'oauth',
            token: token
        });
    },

    getStoredGithubToken: () => {
        return conf.get('github.token');
    },

}
