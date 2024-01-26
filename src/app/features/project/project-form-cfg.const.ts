import {
  ConfigFormSection,
  GenericConfigFormSection,
} from '../config/global-config.model';
import { T } from '../../t.const';
import { Project } from './project.model';
import { nanoid } from 'nanoid';

export const BASIC_PROJECT_CONFIG_FORM_CONFIG: ConfigFormSection<Project> = {
  title: T.F.PROJECT.FORM_BASIC.TITLE,
  key: 'basic',
  items: [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        required: true,
        label: T.F.PROJECT.FORM_BASIC.L_TITLE,
      },
    },
    {
      key: 'isEnableBacklog',
      type: 'checkbox',
      templateOptions: {
        label: T.F.PROJECT.FORM_BASIC.L_ENABLE_BACKLOG,
      },
    },
    {
      key: 'isHiddenFromMenu',
      type: 'checkbox',
      templateOptions: {
        label: T.F.PROJECT.FORM_BASIC.L_IS_HIDDEN_FROM_MENU,
      },
    },
  ],
};

export const CREATE_PROJECT_BASIC_CONFIG_FORM_CONFIG: GenericConfigFormSection = {
  // TODO translate
  title: 'Project Settings & Theme',
  key: 'basic',
  /* eslint-disable */
  help: `Very basic settings for your project.`,
  /* eslint-enable */
  items: [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        required: true,
        label: T.F.PROJECT.FORM_BASIC.L_TITLE,
      },
    },
    {
      key: 'theme.primary',
      type: 'input',
      templateOptions: {
        label: T.F.PROJECT.FORM_THEME.L_THEME_COLOR,
        type: 'color',
      },
    },
    {
      key: 'isBacklogDisabled',
      type: 'checkbox',
      defaultValue: false,
      templateOptions: {
        label: T.F.PROJECT.FORM_BASIC.L_ENABLE_BACKLOG,
      },
    },
  ],
};
