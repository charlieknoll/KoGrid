﻿kg.StyleProvider = function(grid) {
    grid.topPanelStyle = ko.computed(function() {
        return { "height": grid.topPanelHeight() + "px" };
    });
    grid.canvasStyle = ko.computed(function() {
        return { "height": grid.maxCanvasHt().toString() + "px" };
    });
    grid.headerScrollerStyle = ko.computed(function() {
        return { "height": grid.config.headerRowHeight + "px" };
    });
    grid.topPanelStyle = ko.computed(function() {
        return { "width": grid.rootDim.outerWidth() + "px", "height": grid.topPanelHeight() + "px" };
    });
    grid.headerStyle = ko.computed(function() {
        return { "width": (grid.rootDim.outerWidth() - kg.domUtilityService.ScrollW) + "px", "height": grid.config.headerRowHeight + "px" };
    });
    grid.viewportStyle = ko.computed(function() {
        return { "width": grid.rootDim.outerWidth() + "px", "height": grid.viewportDimHeight() + "px" };
    });
};