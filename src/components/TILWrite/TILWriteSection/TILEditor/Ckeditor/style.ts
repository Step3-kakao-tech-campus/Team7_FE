import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div<{ isReadOnly?: boolean }>`
  height: 100%;
  // 툴바 아이콘 여백 조정
  .ck.ck-toolbar > .ck-toolbar__items > :not(.ck-toolbar__line-break) {
    margin: 5px 2px;
  }

  // 툴바 Separator 여백 조정
  .ck.ck-toolbar .ck.ck-toolbar__separator {
    margin: 5px 5px;
  }

  // 툴바 폰트 종류
  .ck.ck-button__label {
    font-family: 'Pretendard', sans-serif;
  }

  // 툴바 포커스 잡힐때 테두리
  .ck.ck-button:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-shadow:
      0 0 0 3px rgba(0, 0, 0, 0.5),
      0 0;
  }

  /* heading 드롭박스 관련 css 시작 */

  .ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus {
    /* box-shadow:
      0 0 0 3px rgba(0, 0, 0, 0.5),
      0 0; */

    box-shadow: none;
  }

  .ck.ck-button:active {
    /* border: 1px solid ${({ theme }) => theme.colors.black}; */
    border: none;
  }

  .ck.ck-button.ck-disabled:focus {
    /* box-shadow:
      0 0 0 3px rgba(0, 0, 0, 0.5),
      0 0; */

    box-shadow: none;
  }

  .ck.ck-button.ck-on.ck-button_with-text.ck-dropdown__button {
    background-color: ${({ theme }) => theme.colors.gray_200};
    color: ${({ theme }) => theme.colors.black};
  }

  .ck.ck-button.ck-heading_paragraph.ck-on.ck-button_with-text {
    background: ${({ theme }) => theme.colors.gray_200};
    color: ${({ theme }) => theme.colors.black};
  }

  .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se {
    box-shadow:
      rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  .ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled) {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }
  /* 
  .ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button {
    border-radius: 6px 6px 0 0;
  } */
  .ck.ck-button {
    border: none;
  }

  .ck.ck-button:focus {
    border: none;
    box-shadow: none;
  }

  .ck.ck-button.ck-heading_paragraph.ck-off.ck-button_with-text {
    /* border-radius: 6px 6px 0 0; */
  }

  .ck.ck-button.ck-heading_paragraph.ck-on.ck-button_with-text {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }

  .ck.ck-button.ck-heading_heading1.ck-on.ck-button_with-text {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }

  .ck.ck-button.ck-heading_heading2.ck-on.ck-button_with-text {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }

  .ck.ck-button.ck-heading_heading3.ck-on.ck-button_with-text {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }

  .ck.ck-button.ck-heading_heading3.ck-off.ck-button_with-text {
    /* border-radius: 0 0 6px 6px; */
  }

  .ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus {
    box-shadow: none;
  }

  /* .ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item {
    border-radius: 6px 6px 0 0;
  } */

  .ck.ck-dropdown__panel {
    box-shadow: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
    /* border-radius: 6px; */
    border: none;
  }

  /* heading 드롭박스 관련 css 끝 */

  /* toolbar 아이콘 배경 css 시작 */
  .ck.ck-button.ck-on {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.gray_200};
  }

  .ck.ck-button.ck-on:not(.ck-disabled):active {
    background: ${({ theme }) => theme.colors.gray_200};
  }

  .ck.ck-button.ck-disabled:active {
    box-shadow:
      0 0 0 3px rgba(0, 0, 0, 0.5),
      0 0;
  }

  .ck.ck-button:active {
    box-shadow:
      0 0 0 3px rgba(0, 0, 0, 0.5),
      0 0;
  }

  .ck.ck-button.ck-on:not(.ck-disabled):hover {
    background: ${({ theme }) => theme.colors.gray_200};
  }

  /* toolbar 아이콘 배경 css 끝 */

  /* toolbar 글자 크기 css 시작 */
  .ck.ck-button.ck-fontsize-option.ck-on.ck-button_with-text {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }
  /* toolbar 글자 크기 css 끝 */

  /* toolbar 글자 색, 배경 css 시작 */
  .ck.ck-color-grid__tile:focus:not(.ck-disabled) {
    box-shadow:
      inset 0 0 0 1px #fff,
      0 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .ck.ck-color-grid__tile:hover:not(.ck-disabled) {
    box-shadow:
      inset 0 0 0 1px #fff,
      0 0 0 2px rgba(0, 0, 0, 0.5);
  }
  /* toolbar 글자 색, 배경 css 끝 */

  /* toolbar 코드블럭 css 시작 */
  .ck.ck-button.ck-on.ck-button_with-text {
    background: rgba(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.colors.gray_200};
  }
  /* toolbar 코드블럭 css 끝 */

  .ck .ck-widget.ck-widget_selected {
    outline: 3px solid ${({ theme }) => theme.colors.rose};
  }

  .ck .ck-widget__resizer__handle {
    background: ${({ theme }) => theme.colors.rose};
  }

  .ck .ck-widget.ck-widget_selected:hover {
    outline: 3px solid ${({ theme }) => theme.colors.rose};
  }

  .ck .ck-widget__resizer {
    outline: 1px solid ${({ theme }) => theme.colors.rose};
  }

  .ck .ck-widget:hover {
    outline-color: ${({ theme }) => theme.colors.black};
  }

  .ck .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button {
    background: ${({ theme }) => theme.colors.rose};
  }
  // 툴바 border 음영 제거
  .ck.ck-toolbar {
    border: none;
    box-shadow: none;
  }

  // 스크롤 될떄 툴바 border 음영 제거
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    border: none;
    box-shadow: none;
  }

  // 본문 포커스 잡힐때 툴바 아래의 그림자 음영 제거
  .ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
    box-shadow: none;
  }

  // 본문 기본 테두리 제거
  .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
    border: none;
  }

  // focus 될때 테두리 제거
  .ck.ck-editor__main > .ck-editor__editable.ck-focused {
    border: none;
  }

  .ck-content p {
    font-size: 1.2rem !important;

    @media ${({ theme }) => theme.mediaQuery.md} {
      font-size: 18px !important;
    }
  }

  /* .ck.ck-editor__editable_inline > :first-child {
    display: none;
  }

  .ck.ck-editor__editable_inline > :last-child {
    display: none;
  } */

  .ck.ck-editor__main {
    padding: 0 20px;

    & > * {
      line-height: 1.5;
    }
  }

  ul {
    padding-left: 20px;
    font-size: 1.2rem;
  }

  ol {
    padding-left: 20px;
    font-size: 1.2rem;
  }

  .ck.ck-sticky-panel__content {
    padding-left: 20px;
  }

  ${({ isReadOnly }) =>
    isReadOnly &&
    css`
      .ck.ck-editor__top.ck-reset_all {
        display: none;
      }
    `}
`;
