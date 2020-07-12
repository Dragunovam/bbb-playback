import React, { PureComponent } from 'react';
import { FormattedDate } from 'react-intl';
import Button from 'components/utils/button';
import './index.scss';

export default class NavigationBar extends PureComponent {
  renderAboutButton() {
    const { toggleAbout } = this.props;

    return (
      <Button
        handleOnClick={toggleAbout}
        icon="vertical-more"
      />
    );
  }

  renderSectionButton() {
    const {
      section,
      toggleSection,
    } = this.props;

    return (
      <Button
        handleOnClick={toggleSection}
        icon={section ? 'minus' : 'plus'}
      />
    );
  }

  renderTitle() {
    const {
      name,
      start,
    } = this.props;

    const date = <FormattedDate value={new Date(start)} />;

    return (
      <span className="title">
        {name} - {date}
      </span>
    );
  }

  render() {
    const { control } = this.props;

    return (
      <div className="navigation-bar">
        <div className="left">
          {control ? this.renderSectionButton() : null}
        </div>
        <div className="center">
          {this.renderTitle()}
        </div>
        <div className="right">
          {control ? this.renderAboutButton() : null}
        </div>
      </div>
    );
  }
}
