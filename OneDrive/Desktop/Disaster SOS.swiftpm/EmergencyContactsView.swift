import SwiftUI

struct EmergencyContactsView: View {
    
    let contacts = [
        ("Police", "100", "shield.fill", Color.blue),
        ("Ambulance", "108", "cross.case.fill", Color.red),
        ("Fire Brigade", "101", "flame.fill", Color.orange),
        ("Disaster Management", "1070", "exclamationmark.triangle.fill", Color.purple),
        ("Women Helpline", "1091", "person.2.fill", Color.pink)
    ]
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                
                // ✅ Headline Text (instead of nav title)
                Text("Emergency Contacts")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .padding(.top)
                
                // ✅ Contact Cards
                VStack(spacing: 15) {
                    ForEach(contacts, id: \.0) { contact in
                        ContactCard(contact: contact)
                    }
                }
            }
            .padding()
        }
        // ✅ Use Apple’s default Back button
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ContactCard: View {
    
    let contact: (String, String, String, Color)
    
    var body: some View {
        HStack(spacing: 15) {
            
            ZStack {
                Circle()
                    .fill(contact.3.opacity(0.15))
                    .frame(width: 45, height: 45)
                
                Image(systemName: contact.2)
                    .foregroundColor(contact.3)
                    .font(.title3)
            }
            
            VStack(alignment: .leading, spacing: 4) {
                Text(contact.0)
                    .font(.headline)
                
                Text("Emergency Helpline")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            Text(contact.1)
                .font(.title3)
                .fontWeight(.bold)
                .foregroundColor(.red)
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(15)
        .shadow(color: .black.opacity(0.08), radius: 5, x: 0, y: 3)
    }
}

#Preview {
    NavigationStack {
        EmergencyContactsView()
    }
}
