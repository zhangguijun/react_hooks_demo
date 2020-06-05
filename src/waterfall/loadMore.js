/**
 * loadMore 组件
 */
import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import './LoadMore.less';
class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.timmer = null;
    this.scrollBackFn = this.scrollBackFn.bind(this);
    this.handleScrollFn = this.handleScrollFn.bind(this);
  }
  componentDidMount() {
    //滚动事件
    window.addEventListener('scroll', this.handleScrollFn);
  }
  handleScrollFn() {
    if (this.props.isLoadingMore) {
      return;
    }

    if (this.timmer) {
      clearTimeout(this.timmer);
    }

    this.timmer = setTimeout(this.scrollBackFn, 300);
  }
  componentWillUnmount() {
    this.timmer && clearTimeout(this.timmer);
    window.removeEventListener('scroll', this.handleScrollFn);
  }
  scrollBackFn() {
    const loadMoreFn = this.props.loadMoreFn;
    if (this.getScrollTop() + this.getWindowHeight() + this.props.loadDistance > this.getScrollHeight()) {
      loadMoreFn();
    }
  }
  //滚动条在Y轴上的滚动距离
  getScrollTop() {
    let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

  //文档的总高度
  getScrollHeight() {
    let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  }

  //浏览器视口的高度
  getWindowHeight() {
    let windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  render() {
    let {showLoadEnd, loadEnd, children, isLoadingMore} = this.props;
    return (
      <div className={`common-load-more`}>
        {children}
      </div>
    );
  }
}

export default LoadMore;

LoadMore.defaultProps = {
  loadDistance: 100,
}

LoadMore.propTypes ={
  loadMoreFn: PropTypes.func,
  isLoadingMore: PropTypes.bool,
  showLoadEnd: PropTypes.bool,
  loadEnd: PropTypes.bool,
  loadDistance: PropTypes.number,
  className: PropTypes.string
}
