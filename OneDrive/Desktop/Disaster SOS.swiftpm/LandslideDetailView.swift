import SwiftUI
import AVFoundation



struct LandslideDetailView: View {
    
    @Environment(\.dismiss) var dismiss
    
    @State private var showPrecautions = false
    @State private var showIntro = false
    @State private var selectedCategory: SafetyCategory = .during
    
    private let synthesizer = AVSpeechSynthesizer()
    
    // MARK: - Safety Data
    let safetySteps: [SafetyStep] = [
        
        // BEFORE
        SafetyStep(category: .before,  text: "Stay alert in areas with steep slopes."),
            SafetyStep(category: .before,  text: "Avoid building on unstable ground."),
            SafetyStep(category: .before,  text: "Have an evacuation plan ready."),
            SafetyStep(category: .during,  text: "Move quickly to higher, stable ground."),
            SafetyStep(category: .during, text: "Stay away from rivers and valleys."),
            SafetyStep(category: .during,text: "Listen to emergency alerts and warnings."),
            SafetyStep(category: .after,  text: "Report damaged roads and unstable terrain."),
            SafetyStep(category: .after,  text: "Check for trapped people and assist."),
            SafetyStep(category: .after,  text: "Avoid re-entering unstable areas."),
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
                        
                        Image("landslide")
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .cornerRadius(15, corners: [.topLeft, .topRight])
                        
                        Text("Landslide")
                            .font(.title)
                            .bold()
                            .padding([.top, .horizontal])
                        
                        Text("Movement of rock, earth, or debris down a slope.")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                        
                        if showIntro {
                            Text("""
A landslide is the downward movement of rock, soil, or debris under the force of gravity.

They are often triggered by heavy rainfall, earthquakes, or human activities that destabilize slopes.
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
    LandslideDetailView()
}
