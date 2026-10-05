import SwiftUI
import AVFoundation

struct TsunamiDetailView: View {
    
    @Environment(\.dismiss) var dismiss
    
    @State private var showPrecautions = false
    @State private var showIntro = false
    @State private var selectedCategory: SafetyCategory = .during
    
    private let synthesizer = AVSpeechSynthesizer()
    
    // MARK: - Safety Data
    let safetySteps: [SafetyStep] = [
        
        SafetyStep(category: .before, text: "Know evacuation routes to higher ground."),
           SafetyStep(category: .before,  text: "Prepare an emergency kit with essentials."),
           SafetyStep(category: .before,  text: "Stay informed about tsunami warnings."),
           SafetyStep(category: .during,  text: "Move inland and to elevated areas immediately."),
           SafetyStep(category: .during,  text: "Do not go near the shore to watch waves."),
           SafetyStep(category: .during,  text: "Follow official evacuation instructions."),
           SafetyStep(category: .after,  text: "Stay away from the coast until cleared."),
           SafetyStep(category: .after,  text: "Help injured people and report missing persons."),
           SafetyStep(category: .after, text: "Avoid damaged buildings and unstable ground."),
            
    ]
    var filteredSteps: [SafetyStep] {
        safetySteps.filter { $0.category == selectedCategory }
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                
                // Back Button
//                Button(action: { dismiss() }) {
//                    Text("> Back")
//                        .font(.headline)
//                        .foregroundColor(.blue)
//                }
//                .padding(.top)
                
                // MARK: - Header Card
                Button(action: {
                    withAnimation(.easeInOut) {
                        showIntro.toggle()
                    }
                }) {
                    VStack(alignment: .leading) {
                        
                        Image("tsunami")
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .cornerRadius(15, corners: [.topLeft, .topRight])
                        
                        Text("Tsunami")
                            .font(.title)
                            .bold()
                            .padding([.top, .horizontal])
                        
                        Text("Large ocean waves caused by underwater disturbances.")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                        
                        if showIntro {
                            Text("""
A tsunami is a series of large ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides.

These waves can travel across entire ocean basins and cause massive destruction along coastlines.
""")
                            .font(.body)
                            .foregroundColor(.secondary)
                            .padding()
                            .transition(.opacity.combined(with: .move(edge: .top)))
                        }
                        
                        HStack {
                            Spacer()
                            Image(systemName: showIntro ? "chevron.up" : "chevron.down")
                                .foregroundColor(.gray)
                                .padding(.bottom, 8)
                        }
                    }
                    .background(Color("CardBG"))
                    .cornerRadius(15)
                    .shadow(radius: 5)
                }
                .buttonStyle(.plain)
                
                // MARK: - Precautions Section
                VStack(alignment: .leading, spacing: 10) {
                    
                    Button(action: {
                        withAnimation {
                            showPrecautions.toggle()
                        }
                    }) {
                        HStack {
                            Text("Precautions & Safety Measures")
                                .font(.headline)
                            
                            Spacer()
                            
                            Image(systemName: showPrecautions ? "chevron.up" : "chevron.down")
                        }
                    }
                    .foregroundColor(.primary)
                    
                    if showPrecautions {
                        
                        // Segmented Control
                        Picker("Category", selection: $selectedCategory) {
                            ForEach(SafetyCategory.allCases, id: \.self) { category in
                                Text(category.rawValue)
                            }
                        }
                        .pickerStyle(.segmented)
                        .padding(.vertical, 5)
                        
                        // Filtered Steps
//                        let filteredSteps = safetySteps.filter {
//                            $0.category == selectedCategory
//                        }
                        
                        VStack(spacing: 15) {
                            ForEach(filteredSteps) { step in
                                SafetyStepCard(step: step)
                            }
                        }
                        .transition(.opacity.combined(with: .move(edge: .top)))
                    }
                }
                
                Spacer()
            }
            .padding()
        }
        .navigationBarBackButtonHidden(false)
    }
}

#Preview {
    TsunamiDetailView()
}
