import React, {useEffect, useState} from "react";
import {menus} from "../constants/menus";
import {Route, Routes, useNavigate} from "react-router-dom";
import {SIDE_NAVIGATION_TYPES} from "../constants";
import IBShop from "../IBShop";

function Router() {
    const [paths, setPaths] = useState([])
    const navigator = useNavigate()

    useEffect(() => {
        const routesArray = []
        modifyRoutes(menus, routesArray)
        setPaths(routesArray)
        mountEvents()
    }, [])

    function getPath(routes, key) {
        let requestedPath = routes[key]?.path
        if (!requestedPath) {
            for (const route of Object.keys(routes)) {
                const subPaths = routes[route].subPaths
                if (subPaths && subPaths[key]) {
                    const currentSubPath = subPaths[key]
                    requestedPath = `${routes[route].path}${currentSubPath.path}`
                    break
                }
            }
        }
        return requestedPath
    }

    function mountEvents() {
        document.addEventListener("redirect", function (event) {
            const requestedPath = getPath(menus, event.detail.requestedPage)
            navigator(requestedPath, {replace: false})
        })
    }

    function getComponent(route) {
        if (route.componentPath) return route.componentPath
        if (route.absolutePath) {
            return route.absolutePath
        } else if (route.parent) {
            if (route.parent.type !== SIDE_NAVIGATION_TYPES.MENU_CATEGORY) {
                return getComponent(route.parent) + "/" + route.componentName
            } else if(route.parent.parent) {
                return `pages/${route.parent.parent.categoryPath}/${route.parent.categoryPath}/${route.componentName}`
            }
            else{
                return `pages/${route.parent.categoryPath}/${route.componentName}`
            }
        } else {
            return `pages/${route.componentName}`
        }
    }

    function modifyRoutes(routesObj, routesArray = [], parent = null) {
        if (!routesObj) return
        Object.keys(routesObj).map(route => {
            const tempRouteObj = {
                ...routesObj[route],
                exact: true,
                parent: parent,
                path: (parent && parent.type !== SIDE_NAVIGATION_TYPES.MENU_CATEGORY ? parent.path : "") + routesObj[route].path
            }
            tempRouteObj.component = React.lazy(() => import(`../../${getComponent(tempRouteObj)}`))
            routesArray.push(tempRouteObj)

            modifyRoutes(routesObj[route].subPaths, routesArray, tempRouteObj)
        })
        return routesArray
    }

    return <Routes>
        <Route path="/" element={<IBShop/>}>
            {paths.map(({path, exact, component: Component, props = {}}, index) => {
                return <Route
                    key={index}
                    path={path}
                    exact={exact}
                    element={<Component {...props} />
                    }
                />
            })}
        </Route>
    </Routes>
}

export default Router
