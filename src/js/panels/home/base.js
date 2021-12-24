import React, { useState } from 'react';

import {
    Panel,
    Group,
    PanelHeader,
    Placeholder
} from '@vkontakte/vkui'
import icon from '../../../svg/icon.svg'

function HomePanelBase({id, router}) {

    return (
        <Panel id={id}>
            <PanelHeader separator={false}>Справочник</PanelHeader>
            <Group>
                <Placeholder
                    icon={<img src={icon} />}
                    stretched
                >
                    Функциональность раздела растет, сейчас наши силы нацелены на полную версию сайта. Возможно в будущем мы вернемся к разработке мобильной версии сайта.
                </Placeholder>
            </Group>
        </Panel>
    );
}

export default HomePanelBase;