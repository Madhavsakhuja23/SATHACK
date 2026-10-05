import SwiftUI
import AVFoundation



struct FloodDetailView: View {
    
    @Environment(\.dismiss) var dismiss
    
    @State private var showPrecautions = false
    @State private var showIntro = false
    @State private var selectedCategory: SafetyCategory = .during
    
    private let synthesizer = AVSpeechSynthesizer()
    
    // MARK: - Safety Data
    let safetySteps: [SafetyStep] = [
        
        SafetyStep(category: .before, text: "Move valuables and electronics to higher ground."),
         SafetyStep(category: .before,  text: "Prepare sandbags to block water entry."),
         SafetyStep(category: .before,  text: "Keep emergency supplies and clean water ready."),
         SafetyStep(category: .during,  text: "Avoid walking or driving through floodwaters."),
         SafetyStep(category: .during,  text: "Stay on higher ground and listen to alerts."),
         SafetyStep(category: .during,  text: "Turn off electricity if water enters your home."),
         SafetyStep(category: .after,  text: "Do not return until authorities declare it safe."),
         SafetyStep(category: .after,  text: "Check for structural damage before entering."),
         SafetyStep(category: .after,  text: "Avoid contaminated water and clean thoroughly."),    ]
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
                        
                        Image("flood")
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .cornerRadius(15, corners: [.topLeft, .topRight])
                        
                        Text("Flood")
                            .font(.title)
                            .bold()
                            .padding([.top, .horizontal])
                        
                        Text("Overflow of water submerging normally dry land.")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                        
                        if showIntro {
                            Text("""
A flood is an overflow of water that submerges land which is usually dry. It can be caused by heavy rainfall, river overflow, dam failure, or storm surges.
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
    FloodDetailView()
}
