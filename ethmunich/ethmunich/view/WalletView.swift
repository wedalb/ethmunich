//
//  WalletView.swift
//  ethmunich
//
//  Created by Heidi Albarazi on 12.08.23.
//

import SwiftUI

struct WalletView: View {
    var body: some View {
        VStack{
            HStack{ //Profile
                Text("Profile")
            }
            .padding(50)
            VStack{
                ZStack {
                    RoundedRectangle(cornerRadius: 25, style: .continuous)
                               .fill(.white)

                           VStack {
                               Text("helo")
                                   .font(.largeTitle)
                                   .foregroundColor(.black)

                               Text("helu")
                                   .font(.title)
                                   .foregroundColor(.gray)
                           }
                           .padding(20)
                           .multilineTextAlignment(.center)
                       }
                .shadow(radius: 5)
                       .frame(width: 450, height: 250)
                   
            }
            .padding()
        }
    }
}

struct WalletView_Previews: PreviewProvider {
    static var previews: some View {
        WalletView()
    }
}
