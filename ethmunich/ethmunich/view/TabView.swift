//
//  TabView.swift
//  ethmunich
//
//  Created by Heidi Albarazi on 12.08.23.
//

import SwiftUI

struct TabbedViewApp: View {
    var body: some View {
        TabView {
            ServicesListView()
                .tabItem {
                    Image(systemName: "1.circle.fill")
                    Text("Tab 1")
                }
                .tag(0)
            
            Text("Tab 2 Content")
                .tabItem {
                    Image(systemName: "2.circle.fill")
                    Text("Tab 2")
                }
                .tag(1)
            
            WalletView()
                .tabItem {
                    Image(systemName: "3.circle.fill")
                    Text("Tab 3")
                }
                .tag(2)
        }
    }
}

struct TabbedViewApp_Previews: PreviewProvider {
    static var previews: some View {
        TabbedViewApp()
    }
}

