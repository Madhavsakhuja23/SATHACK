import SwiftUI
struct DisasterCard: View {
    
    let disaster: String
    
    var body: some View {
        ZStack(alignment: .bottom) {
            
            Image(disaster.lowercased())
                .resizable()
                .scaledToFill()
                .frame(height: 120)
                .clipped()
                .cornerRadius(15)
            
            Rectangle()
                .fill(Color.black.opacity(0.4))
                .frame(height: 35)
                .cornerRadius(15, corners: [.bottomLeft, .bottomRight])
            
            Text(disaster)
                .font(.headline)
                .foregroundColor(.white)
                .bold()
                .padding(.bottom, 8)
        }
        .frame(height: 120)
        .cornerRadius(15)
        .shadow(radius: 2)
    }
}
