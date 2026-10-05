import SwiftUI

// MARK: - Models

enum DisasterType: String, CaseIterable, Identifiable {
    case earthquake = "Earthquake"
    case flood = "Flood"
    case wildfire = "Wildfire"
    case tsunami = "Tsunami"
    case thunderstorm = "Thunderstorm"
    case cyclone = "Cyclone"
    case landslide = "Landslide"
    case drought = "Drought"
    
    var id: String { rawValue }
}

struct EmergencyItem: Identifiable {
    let id = UUID()
    let name: String
    var isChecked: Bool
}

// MARK: - View

struct ChecklistView: View {
    
    @State private var selectedDisaster: DisasterType = .earthquake
    @State private var showReminderAlert = false
    @State private var reminderTimer: Timer?
    
    @State private var disasterKits: [DisasterType: [EmergencyItem]] = [
        
        .earthquake: [
            EmergencyItem(name: "First Aid Kit", isChecked: false),
            EmergencyItem(name: "Flashlight", isChecked: false),
            EmergencyItem(name: "Whistle", isChecked: false),
            EmergencyItem(name: "Emergency Food", isChecked: false)
        ],
        
        .flood: [
            EmergencyItem(name: "Waterproof Bag", isChecked: false),
            EmergencyItem(name: "Drinking Water", isChecked: false),
            EmergencyItem(name: "Dry Clothes", isChecked: false)
        ],
        
        .wildfire: [
            EmergencyItem(name: "Mask", isChecked: false),
            EmergencyItem(name: "Goggles", isChecked: false),
            EmergencyItem(name: "Important Documents", isChecked: false)
        ],
        
        .tsunami: [
            EmergencyItem(name: "Emergency Radio", isChecked: false),
            EmergencyItem(name: "Water Bottle", isChecked: false)
        ],
        
        .thunderstorm: [
            EmergencyItem(name: "Power Bank", isChecked: false),
            EmergencyItem(name: "Torch", isChecked: false)
        ],
        
        .cyclone: [
            EmergencyItem(name: "Batteries", isChecked: false),
            EmergencyItem(name: "Medical Supplies", isChecked: false)
        ],
        
        .landslide: [
            EmergencyItem(name: "Emergency Blanket", isChecked: false),
            EmergencyItem(name: "Snacks", isChecked: false)
        ],
        
        .drought: [
            EmergencyItem(name: "Extra Water Storage", isChecked: false),
            EmergencyItem(name: "ORS Packets", isChecked: false)
        ]
    ]
    
    var body: some View {
        VStack(spacing: 15) {
            
            Text("Prepare Your Emergency Kit Today")
                .font(.title2)
                .bold()
                .padding(.top)
            
            disasterSelector
            
            progressSection
            
            emergencyItemsList
            
            Spacer()
        }
        .background(Color(.systemGray6))
        .alert("Emergency Checklist Reminder", isPresented: $showReminderAlert) {
            Button("OK") { }
        } message: {
            Text("Complete your \(selectedDisaster.rawValue) emergency kit.")
        }
    }
}
extension ChecklistView {
    
    var disasterSelector: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                ForEach(DisasterType.allCases) { disaster in
                    
                    Text(disaster.rawValue)
                        .padding(.horizontal, 14)
                        .padding(.vertical, 8)
                        .background(
                            selectedDisaster == disaster ?
                            Color.red : Color(.systemBackground)
                        )
                        .foregroundColor(
                            selectedDisaster == disaster ?
                            .white : .primary
                        )
                        .cornerRadius(20)
                        .onTapGesture {
                            withAnimation {
                                selectedDisaster = disaster
                                evaluateReminderLogic()
                            }
                        }
                }
            }
            .padding(.horizontal)
        }
    }
}
extension ChecklistView {
    
    var completionProgress: Double {
        guard let items = disasterKits[selectedDisaster] else { return 0 }
        let completed = items.filter { $0.isChecked }.count
        return Double(completed) / Double(items.count)
    }
    
    var progressSection: some View {
        VStack(alignment: .leading, spacing: 8) {
            
            Text("\(selectedDisaster.rawValue) Kit Progress: \(Int(completionProgress * 100))%")
                .font(.subheadline)
            
            ProgressView(value: completionProgress)
                .tint(.red)
        }
        .padding(.horizontal)
    }
}
extension ChecklistView {
    
    var emergencyItemsList: some View {
        
        VStack(spacing: 0) {
            
            if let items = disasterKits[selectedDisaster] {
                
                ForEach(items.indices, id: \.self) { index in
                    
                    HStack {
                        Text(items[index].name)
                        
                        Spacer()
                        
                        Button {
                            disasterKits[selectedDisaster]?[index].isChecked.toggle()
                            evaluateReminderLogic()
                        } label: {
                            Image(systemName:
                                  items[index].isChecked ?
                                  "checkmark.circle.fill" : "circle")
                                .foregroundColor(
                                    items[index].isChecked ?
                                    .green : .gray
                                )
                                .font(.title3)
                        }
                    }
                    .padding()
                    
                    if index != items.count - 1 {
                        Divider().padding(.leading)
                    }
                }
            }
        }
        .background(Color(.systemBackground))
        .cornerRadius(20)
        .shadow(radius: 4)
        .padding(.horizontal)
    }
}
extension ChecklistView {
    
    func evaluateReminderLogic() {
        
        reminderTimer?.invalidate()
        
        let checkedCount = disasterKits[selectedDisaster]?.filter { $0.isChecked }.count ?? 0
        let totalCount = disasterKits[selectedDisaster]?.count ?? 1
        
        if checkedCount > 0 && checkedCount < totalCount {
            
            // Partial completion → Start reminder
            reminderTimer = Timer.scheduledTimer(withTimeInterval: 10, repeats: true) { _ in
                showReminderAlert = true
            }
        }
    }
}
#Preview {
    ChecklistView()
}
