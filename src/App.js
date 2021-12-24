import React from 'react';
import { withRouter } from 'react-router-vkminiapps';

import HomePanelBase from './js/panels/home/base';
import {
  Epic, 
  View,
  ConfigProvider,
  AdaptivityProvider, 
  AppRoot
} from "@vkontakte/vkui";

function App(props) {
  const setActiveView = (e) => props.router.toView(e.currentTarget.dataset.id)

  let parsedUrl = new URL(window.location.href)

  return(
    <ConfigProvider isWebView={true}>
      <AdaptivityProvider>
        <AppRoot>
          <Epic activeStory={props.router.activeView}>
            <View
              id="home"
              activePanel={props.router.activePanel}
            >
              <HomePanelBase id="base" router={props.router}/>
            </View>
          </Epic>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default withRouter(App);