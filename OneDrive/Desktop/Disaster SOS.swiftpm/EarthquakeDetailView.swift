import SwiftUI
import AVFoundation

struct EarthquakeDetailView: View {
    
    @Environment(\.dismiss) var dismiss
    
    @State private var showPrecautions = false
    @State private var showIntro = false
    @State private var selectedCategory: SafetyCategory = .during
    
    private let synthesizer = AVSpeechSynthesizer()
    
    // MARK: - Safety Data
    let safetySteps: [SafetyStep] = [
        
        // BEFORE
        SafetyStep(category: .before,  text: "Secure heavy furniture to walls."),
        SafetyStep(category: .before,  text: "Prepare an emergency emergency kit."),
        
        // DURING
        SafetyStep(category: .during,  text: "Drop down to your hands and knees and cover your head and neck. Stay there until help arrives."),
        SafetyStep(category: .during,  text: "Hold on to sturdy furniture."),
        
        // AFTER
        SafetyStep(category: .after,  text: "Check yourself and others for injuries."),
        SafetyStep(category: .after,  text: "Be prepared for aftershocks.")
    ]
    
    var filteredSteps: [SafetyStep] {
        safetySteps.filter { $0.category == selectedCategory }
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                
                // Header Card
                Button(action: {
                    withAnimation(.easeInOut) {
                        showIntro.toggle()
                    }
                }) {
                    VStack(alignment: .leading) {
                        
                        Image("earthquake")
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .cornerRadius(15, corners: [.topLeft, .topRight])
                        
                        Text("Earthquake")
                            .font(.title)
                            .bold()
                            .padding([.top, .horizontal])
                        
                        Text("Sudden shaking of the ground caused by movements in Earth's crust.")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                        
                        if showIntro {
                            Text("""
An earthquake is the sudden shaking of the Earth's surface caused by the release of energy in the Earth's crust.

It usually occurs when tectonic plates move, collide, or slide past each other along faults.
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
                
                // Precautions Section
                VStack(alignment: .leading, spacing: 10) {
                    
                    Button(action: {
                        withAnimation {
                            showPrecautions.toggle()
                        }
                    }) {
                        HStack {
                            Text("Precautions & Safety Measures")
                                .font(.headline)
                                .foregroundColor(.black)
                            
                            Spacer()
                            
                            Image(systemName: showPrecautions ? "chevron.up" : "chevron.down")
                                .foregroundColor(.black)   // optional (icon black)
                        }
                    }
                    
                    if showPrecautions {
                        
                        Picker("Category", selection: $selectedCategory) {
                            ForEach(SafetyCategory.allCases, id: \.self) { category in
                                Text(category.rawValue)
                            }
                        }
                        .pickerStyle(.segmented)
                        
                        VStack(spacing: 15) {
                            ForEach(filteredSteps) { step in
                                SafetyStepCard(step: step)
                            }
                        }
                    }
                }
            }
            .padding()
        }
        .navigationBarBackButtonHidden(false)
    }
}
#Preview{
    EarthquakeDetailView()
}
