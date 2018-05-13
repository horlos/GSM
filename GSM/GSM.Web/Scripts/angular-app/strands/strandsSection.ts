﻿namespace App.Strands {
    let section = new Framework.AppSection('app.strands',
    [
        'ngResource',
        'ngFileUpload',
        'LocalStorageModule',
        'ui.router',
        'ui.bootstrap.contextMenu',
        'ui.bootstrap',
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.resizeColumns',
        'ui.grid.selection',
        'ui.grid.autoFitColumns',
        'common',
        'common.logger',
        'app.services',
        'app.widgets'
    ]);
    App.getAppContainer().addSection(section);
}
