/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
<<<<<<< Updated upstream
          width: 100%;
          min-height: 100px;
          border: 1px solid black;
          box-sizing: border-box;
          padding-left: 8px;
          padding-right: 8px;
          display: flex;
          overflow-y: auto;
        }
        :host * {
          box-sizing: border-box;
        }
        :host .game {
          padding: 12px 6px;
        }
        :host .game > .image {
          position: relative;
          --image-size: 64px;
          height: var(--image-size);
          width: var(--image-size);
          margin: 2px 12px;
          border-radius: 100%;
          background-color: #999999;
        }
        :host .game > .image > iron-icon.interactive {
          --icon-size: 48px;
          width: var(--icon-size);
          height: var(--icon-size);
          margin: calc( ( 64px - var(--icon-size) ) / 2 );
          color: #ffffff;
        }
        :host .game > .image > iron-icon.managing {
          position: absolute;
          --icon-size: 24px;
          width: var(--icon-size);
          height: var(--icon-size);
          margin: 0 0 0 40px;
          color: gold;
          -webkit-text-stroke: 1px black;
        }
        :host .game > .image > iron-icon.managing:nth-child(2) {
          color: #000000CC;
        }
        :host .game > .title {
          
        }
        :host .game > .title > * {
          --text-margin: 10px;
          margin-top: var(--text-margin);
          margin-bottom: calc(var(--text-margin)/2);
          text-align: center;
=======
>>>>>>> Stashed changes
        }
      </style>

      <template is="dom-repeat" items="{{games}}">
        <div class="game">
          <div class="image" style="background-image: [[item.image]]">
            <template is="dom-if" if="[[item.admin]]">
              <iron-icon icon="star" class="managing"></iron-icon>
              <iron-icon icon="star-border" class="managing"></iron-icon>
            </template>
          </div>
          <div class="title"><h4>[[item.name]]</h4></div>
        </div>
      </template>
      
      <div class="game">
          <div class="image">
            <iron-icon icon="add" class="interactive"></iron-icon>
          </div>
          <div class="title"><h4>Add Game</h4></div>
        </div>
    `;
  }

  static get properties() {
    return {
      games: {
        type: Array,
        value() {
          return [
            { name: 'Game 1', image: '', admin: true },
            { name: 'Game 2', image: '' }
          ];
        }
      }
    };
  }
}

window.customElements.define('my-view1', MyView1);
